{
  "name": "<%= name %>",
  "version": "1.0.0",
  "description": "",
  "main": "lib/<%= name %>.js",
  "module": "es/index.js",
  "style": "lib/index.css",
  "typings": "lib/index.d.ts",
  "files": [
    "lib",
    "es"
  ],
  "scripts": {
    "dev": "miracle-cli dev",
    "lint": "miracle-cli lint",
    "build": "miracle-cli build",
    "build:site": "miracle-cli build-site",
    "release:site": "pnpm build:site && npx gh-pages -d site-dist"
  },
  "author": "",
  "nano-staged": {
    "*.md": "prettier --write",
    "*.{ts,tsx,js,vue,less,scss}": "prettier --write",
    "*.{ts,tsx,js,vue}": "eslint --fix"
  },
  "peerDependencies": {
    "vue": "^3.5.0"
  },
  "devDependencies": {
    "@miracle/cli": "^7.0.0",
    "vue": "^3.5.0",
    "sass": "^1.49.7"
  },
  "eslintConfig": {
    "root": true,
    "extends": [
      "@miracle"
    ]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": [
    "Chrome >= 51",
    "iOS >= 10"
  ]
}
