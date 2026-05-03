const test = require('node:test');
const assert = require('node:assert/strict');

const {
    createTemplateContext,
    getStartCommand,
    renderTemplate,
} = require('../lib/generator.js');

test('createTemplateContext derives css language and style dependency', () => {
    const context = createTemplateContext({
        name: 'demo-app',
        vueVersion: 'vue3',
        preprocessor: 'sass',
        packageManager: 'pnpm',
    });

    assert.equal(context.cssLang, 'scss');
    assert.equal(context.styleDependency, '"sass": "^1.49.7"');
    assert.equal(context.packageManager, 'pnpm');
    assert.equal(context.installCommand, 'pnpm install');
    assert.equal(context.startDevCommand, 'pnpm dev');
});

test('createTemplateContext uses less dependency when less is selected', () => {
    const context = createTemplateContext({
        name: 'demo-app',
        vueVersion: 'vue3',
        preprocessor: 'less',
        packageManager: 'npm',
    });

    assert.equal(context.cssLang, 'less');
    assert.equal(context.styleDependency, '"less": "^4.2.0"');
    assert.equal(context.startDevCommand, 'npm run dev');
});

test('getStartCommand returns package-manager specific instructions', () => {
    assert.equal(
        getStartCommand({ name: 'demo-app', packageManager: 'pnpm' }),
        'cd demo-app && pnpm install && pnpm dev',
    );
    assert.equal(
        getStartCommand({ name: 'demo-app', packageManager: 'npm' }),
        'cd demo-app && npm install && npm run dev',
    );
    assert.equal(
        getStartCommand({ name: 'demo-app', packageManager: 'bun' }),
        'cd demo-app && bun install && bun run dev',
    );
});

test('renderTemplate replaces all placeholders in template content', () => {
    const rendered = renderTemplate(
        'name=<%= name %>; lang=<%= cssLang %>; pm=<%= packageManager %>',
        {
            name: 'demo-app',
            cssLang: 'scss',
            packageManager: 'pnpm',
        },
    );

    assert.equal(rendered, 'name=demo-app; lang=scss; pm=pnpm');
});
