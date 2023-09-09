module.exports = {
    // this file is the root-level one used by the project and ESLint should not search beyond this directory for config files.
    root: true,
    // each environment brings with it a certain set of predefined global variables.
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    // tells ESLint that your config extends the given configurations.
    // 继承另一个配置文件的所有特征（包括规则、插件和语言选项）
    // 可以在plugin实现自定义规则，然后提供配置文件在此继承。
    "extends": [
        "eslint:recommended",
        // "plugin:@typescript-eslint/recommended"
        "plugin:@typescript-eslint/recommended-type-checked", // @recommended-type-checked
        'plugin:@typescript-eslint/strict-type-checked', // @recommended-type-checked
    ],
    // 有时，更精细的配置是必要的，比如同一目录下的文件的配置不同。因此，你可以在 overrides 键下提供配置，这些配置只会用于符合特定 glob 模式的文件
    // 单独针对某些文件修改全局规则
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    // custom parser or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        // This property determines which global variables and syntax are valid in your code
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": true, // @recommended-type-checked
        "tsconfigRootDir": __dirname // @recommended-type-checked
    },
    // eslint默认规则有限，只支持标准js语法，需要自定义规则时使用plugin。
    "plugins": [
        // this allows you to use typescript-eslint's rules within your codebase.
        "@typescript-eslint"
    ],
    "rules": {
    }
}
