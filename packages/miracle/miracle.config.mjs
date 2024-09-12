export default {
  name: 'miracle',
  build: {
    srcDir: 'src',
    tagPrefix: 'mi-',
    namedExport: true,
    skipInstall: ['lazyload'],
    packageManager: 'pnpm',
    extensions: {
      esm: '.mjs',
    },
    site: {
      publicPath:
        (typeof window === 'undefined' && process.env.PUBLIC_PATH) ||
        '/miracle/',
    },
    vetur: {
      tagPrefix: 'mi-',
    },
    css: {
      removeSourceFile: true,
    },
  },
  site: {
    defaultLang: 'zh-CN',
    darkModeClass: 'mi-theme-dark',
    lightModeClass: 'mi-theme-light',
    enableVConsole: false,
    versions: [],
    baiduAnalytics: {
      seed: '',
    },
    locales: {
      'zh-CN': {
        title: 'Miracle UI',
        subtitle: '（适用于 Vue 3）',
        description: '轻量、可定制的移动端组件库',
        logo: 'https://s2.loli.net/2024/03/01/iBCSOVqbj6LTDfA.png',
        langLabel: '中kk',
        links: [
          {
            logo: 'https://s2.loli.net/2024/03/01/xOQs6Nf3GKZcRdW.png',
            url: 'https://wuxingxi.top/',
          },
          {
            logo: 'https://s2.loli.net/2024/03/02/u8gestT2OGzE1A5.png',
            url: 'https://github.com/wuxingxi888',
          },
        ],
        nav: [
          {
            title: '开发指南',
            items: [
              {
                path: 'home',
                title: '介绍',
              },
              {
                path: 'quickstart',
                title: '快速上手',
              },
              {
                path: 'advanced-usage',
                title: '进阶用法',
              },
              {
                path: 'faq',
                title: '常见问题',
              },
              {
                path: 'changelog',
                title: '更新日志',
              },
              {
                path: 'release-note-v4',
                title: '4.0 更新介绍',
              },
              {
                path: 'contribution',
                title: '贡献指南',
              },
              {
                path: 'design',
                title: '设计资源',
              },
              {
                path: 'locale',
                title: '国际化',
              },
            ],
          },
          {
            title: '基础组件',
            items: [
              // {
              //   path: 'button',
              //   title: 'Button 按钮',
              // }
            ],
          },
          // {
          //   title: '组合式 API',
          //   items: [
          //     {
          //       path: 'vant-use-intro',
          //       title: '介绍',
          //     },
          //     {
          //       path: 'use-click-away',
          //       title: 'useClickAway',
          //     },
          //     {
          //       path: 'use-count-down',
          //       title: 'useCountDown',
          //     },
          //     {
          //       path: 'use-custom-field-value',
          //       title: 'useCustomFieldValue',
          //     },
          //     {
          //       path: 'use-event-listener',
          //       title: 'useEventListener',
          //     },
          //     {
          //       path: 'use-page-visibility',
          //       title: 'usePageVisibility',
          //     },
          //     {
          //       path: 'use-rect',
          //       title: 'useRect',
          //     },
          //     {
          //       path: 'use-relation',
          //       title: 'useRelation',
          //     },
          //     {
          //       path: 'use-scroll-parent',
          //       title: 'useScrollParent',
          //     },
          //     {
          //       path: 'use-toggle',
          //       title: 'useToggle',
          //     },
          //     {
          //       path: 'use-window-size',
          //       title: 'useWindowSize',
          //     },
          //     {
          //       path: 'use-raf',
          //       title: 'useRaf',
          //     },
          //   ],
          // },
        ],
      },
      'en-US': {
        title: 'Miracle UI',
        subtitle: ' (for Vue 3)',
        description:
          'A lightweight, customizable Vue UI library for mobile web apps.',
        logo: 'https://s2.loli.net/2024/03/01/iBCSOVqbj6LTDfA.png',
        langLabel: 'EN',
        links: [
          {
            logo: 'https://s2.loli.net/2024/03/01/xOQs6Nf3GKZcRdW.png',
            url: 'https://wuxingxi.top/',
          },
          {
            logo: 'https://s2.loli.net/2024/03/02/u8gestT2OGzE1A5.png',
            url: 'https://github.com/wuxingxi888',
          },
        ],
        nav: [
          {
            title: 'Essentials',
            items: [
              {
                path: 'home',
                title: 'Introduction',
              },
              {
                path: 'quickstart',
                title: 'Quickstart',
              },
              {
                path: 'advanced-usage',
                title: 'Advanced Usage',
              },
              {
                path: 'faq',
                title: 'FAQ',
              },
              {
                path: 'changelog',
                title: 'Changelog',
              },
              {
                path: 'release-note-v4',
                title: '4.0 Release Note',
              },
              {
                path: 'contribution',
                title: 'Contribution Guide',
              },
              {
                path: 'design',
                title: 'Design Resources',
              },
              {
                path: 'locale',
                title: 'Internationalization',
              },
            ],
          },
          {
            title: 'Basic Components',
            items: [
              // {
              //   path: 'button',
              //   title: 'Button',
              // }
            ],
          },
          // {
          //   title: 'Composables',
          //   items: [
          //     {
          //       path: 'vant-use-intro',
          //       title: 'Intro',
          //     },
          //     {
          //       path: 'use-click-away',
          //       title: 'useClickAway',
          //     },
          //     {
          //       path: 'use-count-down',
          //       title: 'useCountDown',
          //     },
          //     {
          //       path: 'use-custom-field-value',
          //       title: 'useCustomFieldValue',
          //     },
          //     {
          //       path: 'use-event-listener',
          //       title: 'useEventListener',
          //     },
          //     {
          //       path: 'use-page-visibility',
          //       title: 'usePageVisibility',
          //     },
          //     {
          //       path: 'use-rect',
          //       title: 'useRect',
          //     },
          //     {
          //       path: 'use-relation',
          //       title: 'useRelation',
          //     },
          //     {
          //       path: 'use-scroll-parent',
          //       title: 'useScrollParent',
          //     },
          //     {
          //       path: 'use-toggle',
          //       title: 'useToggle',
          //     },
          //     {
          //       path: 'use-window-size',
          //       title: 'useWindowSize',
          //     },
          //     {
          //       path: 'use-raf',
          //       title: 'useRaf',
          //     },
          //   ],
          // },
        ],
      },
    },
  },
};
