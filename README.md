### npm 脚本

安装依赖

```shell
# 使用 npm
npm install

# OR 使用 yarn
yarn
```

开发环境运行

```shell
# 使用 npm
npm run dev:weapp

# OR 使用 yarn
yarn dev:weapp
```

生产环境运行

```shell
npm run prd:weapp
```

开发环境打包

```shell
npm run build:dev:weapp
```

生产环境打包

```shell
npm run build:prd:weapp
```

代码检测

```shell
npm run lint:eslint
```

代码检查（仅限检查已改动的文件）

```shell
npm run lint:lint-staged
```

修复代码

```shell
npm run fix:eslint
```

格式化代码

```shell
npm run fix:prettier
```

安装 git hook 管理

```shell
npm run prepare
```

commit 提交（包含规范描述）

```shell
npm run commit
```