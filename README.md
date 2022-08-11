# VSCode Extension NLS Sample

[![VSCode Extension](https://img.shields.io/badge/Framework-VSCode-0066b8)](https://code.visualstudio.com/api)
[![VSCode-nls](https://img.shields.io/badge/Framework-vscode-nls-0066b8)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6)](https://www.typescriptlang.org/)
[![Webpack 5](https://img.shields.io/badge/Develop-webpack-eaf8ff)](https://webpack.js.org/concepts/)

This is an example of how the VSCode extension implements internationalization (`i18n`). It's base on the webpack packaging extension and use `vscode-nls` + `gulp`.
If your extension insists on using `vscode-nls` you can refer to this sample, but if it's not necessary, I recommand you to use `vscode-nls-i18n` will be convenient. 
BTW, as my test, vscode-nls cannot support `web extension` packaging, even packed successfully, cannot display multiple languages.

> 由于 VSCode 官方提供的国际化插件示例跟不上最新的插件打包方式(Webpack打包)，文档也跟不上，参考了一些大佬的解决方案做了本示例。如果你的项目不是非要用`vscode-nls`来做国际化的话，个人推荐使用`vscode-nls-i18n`来实现会更为方便。

Refs:
* [vscode-nls-i18n](https://github.com/axetroy/vscode-nls-i18n)
* [vscode-nls](https://github.com/microsoft/vscode-nls)
* [Microsoft i18n Sample](https://github.com/microsoft/vscode-extension-samples/tree/main/i18n-sample)


## Start

```bash
# 0. Clone project
git clone https://github.com/LinLzis/vscode-extension-nls-sample.git

# 1. Install dependencies
yarn

# 2. Extension package
npx vsce package
```
