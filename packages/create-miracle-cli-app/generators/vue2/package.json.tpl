{
  "name": "<%= name %>",
  "version": "1.0.0",
  "description": "",
  "main": "lib/<%= name %>.js",
  "style": "lib/index.css",
  "files": [
    "lib",
    "es"
  ],
  "scripts": {
    "dev": "miracle-cli dev",
    "test": "miracle-cli test",
    "lint": "miracle-cli lint",
    "build": "miracle-cli build",
    "release": "miracle-cli release",
    "test:coverage": "open test/coverage/index.html",
    "build-site": "miracle-cli build-site && npx gh-pages -d site-dist"
  },
  "author": "",
  "husky": {
    "hooks": {
      "pre-commit": "nano-staged",
      "commit-msg": "miracle-cli commit-lint"
    }
  },
  "nano-staged": {
    "*.{ts,tsx,js,jsx,vue}": "eslint --fix"
  },
  "peerDependencies": {
    "vue": "^2.6.11",
    "vue-template-compiler": "^2.6.11"
  },
  "devDependencies": {
    "@miracle/cli": "^2.0.0",
    "vue": "^2.6.11",
    "vue-template-compiler": "^2.6.11"
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
    "Android >= 4.0",
    "iOS >= 8"
  ]
}
