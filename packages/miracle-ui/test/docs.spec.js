import fs from 'node:fs';
import path from 'node:path';
import miracleConfig from '../miracle.config.mjs';

const scenarioDocPath = path.resolve(
    process.cwd(),
    'docs/markdown/scenario-patterns.zh-CN.md',
);

const designTokensDocPath = path.resolve(
    process.cwd(),
    'docs/markdown/design-tokens.zh-CN.md',
);

const changelogDocPath = path.resolve(
    process.cwd(),
    'docs/markdown/changelog.zh-CN.md',
);

const phaseTwoRoadmapPath = path.resolve(
    process.cwd(),
    '../../docs/roadmap/phase2-scenario-demos.md',
);

const phaseOneDocPaths = [
    'project-positioning.zh-CN.md',
    'design-tokens.zh-CN.md',
    'release-process.zh-CN.md',
].map((filename) => path.resolve(process.cwd(), 'docs/markdown', filename));

const scenarioDemoPaths = [
    'scenario-search-list',
    'scenario-step-form',
    'scenario-upload-submit',
    'scenario-selector-popup',
    'scenario-result-feedback',
];

const scenarioReadmePaths = scenarioDemoPaths.map((demoPath) =>
    path.resolve(process.cwd(), 'src', demoPath, 'README.zh-CN.md'),
);

const scenarioReadmeExpectations = {
    'scenario-search-list': [
        /<mi-nav-bar[\s>]/,
        /<mi-search[\s>]/,
        /<mi-dropdown-menu[\s>]/,
        /<mi-list[\s>]/,
    ],
    'scenario-step-form': [
        /<mi-steps[\s>]/,
        /<mi-form[\s>]/,
        /<mi-field[\s>]/,
        /<mi-button[\s>]/,
    ],
    'scenario-upload-submit': [
        /<mi-notice-bar[\s>]/,
        /<mi-cell-group[\s>]/,
        /<mi-uploader[\s>]/,
        /<mi-button[\s>]/,
    ],
    'scenario-selector-popup': [
        /<mi-cell[\s>]/,
        /<mi-popup[\s>]/,
        /<mi-tabs[\s>]/,
        /<mi-picker[\s>]/,
    ],
    'scenario-result-feedback': [
        /<mi-empty[\s>]/,
        /<mi-notice-bar[\s>]/,
        /<mi-cell-group[\s>]/,
        /<mi-action-bar[\s>]/,
    ],
};

const zhNavItems = () =>
    miracleConfig.site.locales['zh-CN'].nav.flatMap((section) =>
        section.items.map((item) => ({ ...item, section: section.title })),
    );

const hasMobileDemo = (docPath) =>
    fs.existsSync(
        path.resolve(process.cwd(), 'src', docPath, 'demo/index.vue'),
    );

const getRawComponentLines = (content) => {
    let inFence = false;

    return content.split('\n').filter((line) => {
        if (line.startsWith('```')) {
            inFence = !inFence;
            return false;
        }

        return !inFence && /<mi-[a-z]/.test(line);
    });
};

test('standalone scenario patterns page is not public documentation', () => {
    const navItems = zhNavItems().map((item) => item.path);

    expect(fs.existsSync(scenarioDocPath)).toBe(false);
    expect(navItems).not.toContain('scenario-patterns');
});

test('scenario demos include code examples next to preview docs', () => {
    scenarioDemoPaths.forEach((demoPath) => {
        const readmePath = path.resolve(
            process.cwd(),
            'src',
            demoPath,
            'README.zh-CN.md',
        );
        const content = fs.readFileSync(readmePath, 'utf-8');

        expect(content).toContain('### 示例代码');
        expect(content).toContain('```html');
        scenarioReadmeExpectations[demoPath].forEach((pattern) => {
            expect(content).toMatch(pattern);
        });
        expect(content).not.toMatch(
            /下一阶段|路线图|提案|优先沉淀|新增基础组件/,
        );
    });
});

test('phase 1 docs are registered in site navigation', () => {
    const navItems = zhNavItems().map((item) => item.path);

    expect(navItems).toContain('project-positioning');
    expect(navItems).toContain('design-tokens');
    expect(navItems).toContain('release-process');
    expect(navItems).not.toContain('scenario-patterns');
    expect(navItems).not.toContain('phase2-roadmap');
});

test('scenario demos are public site demos without package exports', () => {
    const navItems = zhNavItems();
    const scenarioItems = navItems.filter(
        (item) => item.section === '场景组合',
    );

    expect(scenarioItems.map((item) => item.path)).toEqual(scenarioDemoPaths);

    scenarioDemoPaths.forEach((demoPath) => {
        const demoRoot = path.resolve(process.cwd(), 'src', demoPath);

        expect(fs.existsSync(path.join(demoRoot, 'README.zh-CN.md'))).toBe(
            true,
        );
        expect(fs.existsSync(path.join(demoRoot, 'demo/index.vue'))).toBe(true);
        expect(fs.existsSync(path.join(demoRoot, 'index.ts'))).toBe(false);
    });
});

test('phase 1 docs keep Miracle component examples inside code fences', () => {
    [...phaseOneDocPaths, ...scenarioReadmePaths].forEach((docPath) => {
        const content = fs.readFileSync(docPath, 'utf-8');
        const rawComponentLines = getRawComponentLines(content);

        expect(rawComponentLines).toEqual([]);
    });
});

test('desktop site only shows simulator for pages with mobile demos', () => {
    const docsWithoutDemo = zhNavItems()
        .filter((item) => item.path !== 'home')
        .filter((item) => !hasMobileDemo(item.path));

    expect(
        docsWithoutDemo
            .filter((item) => item.hideSimulator !== true)
            .map((item) => `${item.section}/${item.path}`),
    ).toEqual([]);
});

test('design token doc maps ConfigProvider theme vars to css variables', () => {
    const content = fs.readFileSync(designTokensDocPath, 'utf-8');

    expect(content).toContain(
        '| `primaryColor` | `--mi-primary-color` | 品牌主色 |',
    );
    expect(content).toContain(
        '| `buttonPrimaryBackground` | `--mi-button-primary-background` | 主按钮背景 |',
    );
    expect(content).toContain(
        '| `navBarIconColor` | `--mi-nav-bar-icon-color` | 导航栏图标颜色 |',
    );
});

test('phase 2 roadmap is kept as an internal planning document', () => {
    const content = fs.readFileSync(phaseTwoRoadmapPath, 'utf-8');
    const publicContent = [
        ...phaseOneDocPaths,
        ...scenarioReadmePaths,
        changelogDocPath,
    ]
        .map((docPath) => fs.readFileSync(docPath, 'utf-8'))
        .join('\n');

    expect(content).toContain('Phase 2 场景 Demo 提案');
    expect(content).toContain('场景 Demo 与模板化');
    expect(content).toContain('搜索筛选列表页');
    expect(content).toContain('分步表单页');
    expect(content).toContain('上传提交页');
    expect(content).toContain('选择器弹层页');
    expect(content).toContain('结果反馈页');
    expect(content).toContain('不新增业务组件 API');
    expect(content).toContain('create-miracle-cli-app');
    expect(content).toContain('官网只展示最终可用内容');
    expect(publicContent).not.toContain('#/zh-CN/phase2-roadmap');
});

test('changelog covers unreleased work and published ui versions', () => {
    const content = fs.readFileSync(changelogDocPath, 'utf-8');

    expect(content).toContain('### 待发布');
    expect(content).toContain('create-miracle-cli-app');
    expect(content).toContain('新增项目定位、设计令牌和发布流程文档');
    expect(content).toContain('五个可预览场景组合 Demo');
    expect(content).not.toContain('Phase 1 Roadmap');
    expect(content).not.toContain('Phase 2 Roadmap');

    expect(content).toContain('### v0.0.4');
    expect(content).toContain('`2025-01-22`');
    expect(content).toContain('Indicator 指示器');

    expect(content).toContain('### v0.0.3');
    expect(content).toContain('`2024-11-29`');
    expect(content).toContain('useState');

    expect(content).toContain('### v0.0.2');
    expect(content).toContain('`2024-10-22`');
    expect(content).toContain('@miracle-web/ui');

    expect(content).toContain('### v0.0.1');
    expect(content).toContain('`2024-10-14`');
    expect(content).toContain('首个公开版本');

    expect(content).not.toContain('待更新');
    expect(content).not.toContain('xxxx-xx-xx');
});
