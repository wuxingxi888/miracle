import fs from 'fs-extra';
import glob from 'fast-glob';
import color from 'picocolors';
import { logger } from 'rslog';
import { prompt } from 'enquirer';
import { sep, join } from 'node:path';
import { CWD, GENERATOR_DIR } from './constant';

const PROMPTS = [
    {
        name: 'vueVersion',
        message: 'Select Vue version',
        type: 'select',
        choices: [
            {
                name: 'vue3',
                message: 'Vue 3',
            },
            {
                name: 'vue2',
                message: 'Vue 2',
            },
        ],
    },
    {
        name: 'preprocessor',
        message: 'Select css preprocessor',
        type: 'select',
        choices: ['Sass', 'Less'],
    },
    {
        name: 'packageManager',
        message: 'Select package manager',
        type: 'select',
        choices: ['pnpm', 'npm', 'yarn', 'bun'],
    },
];

type VueVersion = 'vue2' | 'vue3';
type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun';
type Preprocessor = 'sass' | 'less';

interface GeneratorInputs {
    name: string;
    cssLang: string;
    vueVersion: VueVersion;
    preprocessor: Preprocessor;
    packageManager: PackageManager;
    styleDependency: string;
    installCommand: string;
    startDevCommand: string;
}

interface TemplateContextArgs {
    name: string;
    vueVersion: VueVersion;
    preprocessor: Preprocessor;
    packageManager: PackageManager;
}

const STYLE_DEPENDENCY_MAP: Record<Preprocessor, string> = {
    sass: '"sass": "^1.49.7"',
    less: '"less": "^4.2.0"',
};

export function createTemplateContext(
    args: TemplateContextArgs,
): GeneratorInputs {
    const { name, packageManager, preprocessor, vueVersion } = args;
    const cssLang = preprocessor === 'sass' ? 'scss' : preprocessor;
    const installCommand =
        packageManager === 'yarn' ? 'yarn' : `${packageManager} install`;
    const startDevCommand =
        packageManager === 'npm'
            ? 'npm run dev'
            : `${packageManager} ${packageManager === 'pnpm' ? 'dev' : 'run dev'}`;

    return {
        name,
        cssLang,
        vueVersion,
        preprocessor,
        packageManager,
        styleDependency: STYLE_DEPENDENCY_MAP[preprocessor],
        installCommand,
        startDevCommand,
    };
}

export function getStartCommand(args: {
    name: string;
    packageManager: PackageManager;
}) {
    const { name, packageManager } = args;
    const runDevCommand =
        packageManager === 'npm'
            ? 'npm run dev'
            : `${packageManager} ${packageManager === 'pnpm' ? 'dev' : 'run dev'}`;
    const installCommand =
        packageManager === 'yarn' ? 'yarn' : `${packageManager} install`;

    return `cd ${name} && ${installCommand} && ${runDevCommand}`;
}

export function renderTemplate(
    templateContent: string,
    args: Record<string, string>,
) {
    return Object.keys(args).reduce((content, key) => {
        const regexp = new RegExp(`<%= ${key} %>`, 'g');
        return content.replace(regexp, args[key]);
    }, templateContent);
}

export class VanGenerator {
    outputDir = '';

    inputs: GeneratorInputs = {
        name: '',
        cssLang: '',
        vueVersion: 'vue3',
        preprocessor: 'sass',
        packageManager: 'pnpm',
        styleDependency: STYLE_DEPENDENCY_MAP.sass,
        installCommand: 'pnpm install',
        startDevCommand: 'pnpm dev',
    };

    constructor(name: string) {
        this.inputs.name = name;
        this.outputDir = join(CWD, name);
    }

    async run() {
        await this.prompting();
        this.writing();
        this.end();
    }

    async prompting() {
        return prompt<Record<string, string>>(PROMPTS).then((inputs) => {
            this.inputs = createTemplateContext({
                name: this.inputs.name,
                vueVersion: inputs.vueVersion as VueVersion,
                preprocessor: inputs.preprocessor.toLowerCase() as Preprocessor,
                packageManager: inputs.packageManager as PackageManager,
            });
        });
    }

    writing() {
        console.log();
        logger.info(`Creating project in ${color.green(this.outputDir)}\n`);

        // see https://github.com/mrmlnc/fast-glob#how-to-write-patterns-on-windows
        const templatePath = join(
            GENERATOR_DIR,
            this.inputs.vueVersion,
        ).replace(/\\/g, '/');

        const templateFiles = glob.sync(
            join(templatePath, '**', '*').replace(/\\/g, '/'),
            {
                dot: true,
            },
        );

        templateFiles.forEach((filePath) => {
            const outputPath = filePath
                .replace('.tpl', '')
                .replace(templatePath, this.outputDir);
            this.copyTpl(filePath, outputPath, this.inputs);
        });
    }

    copyTpl(from: string, to: string, args: Record<string, any>) {
        fs.copySync(from, to);
        let content = fs.readFileSync(to, 'utf-8');
        content = renderTemplate(content, args);

        fs.writeFileSync(to, content);

        const name = to.replace(this.outputDir + sep, '');
        logger.success(`${color.green('create')} ${name}`);
    }

    end() {
        const { name, packageManager } = this.inputs;

        console.log();
        logger.success(`Successfully created ${color.yellow(name)}.`);
        logger.success(
            `Run ${color.yellow(getStartCommand({ name, packageManager }))} to start development!`,
        );
    }
}
