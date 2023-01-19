# eslint-config-ltfe

React项目eslint代码规范，支持TS

## 特征

本项目以[eslint-config-standard](https://github.com/standard/eslint-config-standard)为基础，默认配置包括这些插件：

- [babel](https://github.com/babel/eslint-plugin-babel)
- [eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [flowtype](https://github.com/gajus/eslint-plugin-flowtype)
- [import](https://github.com/benmosher/eslint-plugin-import/issues)
- [jest](https://github.com/jest-community/eslint-plugin-jest/issues)
- [react](https://github.com/yannickcr/eslint-plugin-react/issues)
- [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [react-native](https://github.com/intellicode/eslint-plugin-react-native)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)

本配置使用 ESLint 的`overrides`功能根据文件名自动调整配置。例如，为 .ts 和 .tsx 文件启用了打字稿支持，为测试文件设置了 jest 环境等等。

## Usage

安装

```sh
npm install -D eslint eslint-config-ltfe
```

如果使用 TypeScript, 需要安装 TypeScript 编译器:

```sh
npm install -D typescript
```

配置 `.eslintrc.json`:

```json
{
  "extends": "ltfe"
}
```

在 `package.json`:配置指令检查文件

```json
"scripts": {
  "lint": "eslint \"**/*.{js,ts,tsx}\""
}
```

要在编辑器中显示 lint 错误，您需要配置编辑器。要配置  [VSCode](https://code.visualstudio.com)，请在 `settings.json` 中添加以下内容：

```json
"eslint.validate": [
  {
    "language": "javascript",
    "autoFix": true
  },
  {
    "language": "javascriptreact",
    "autoFix": true
  },
  {
    "language": "typescript",
    "autoFix": true
  },
  {
    "language": "typescriptreact",
    "autoFix": true
  }
],
```

