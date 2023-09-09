import ts from "typescript";
// import { ESLint } from "eslint";

let x;
x = 2;
x = "sss";
console.log(x);

// export async function getEslintIncludes() {
//   const eslint = new ESLint();
//   const config = await eslint.loadConfigFile("./eslintrc.cjs");
//   const array = eslint.getConfigArrayFromConfigObject(config);
//   return eslint;
// }

export function getTsIncludes() {
  // 读取 tsconfig.json 文件
  const tsconfigPath = "./tsconfig.json";
  const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);

  // 解析 tsconfig.json
  const configParseResult = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    "./",
    undefined,
    tsconfigPath
  );

  // 获取编译器将编译的文件列表
  const compilerOptions = configParseResult.options;
  const rootFileNames = configParseResult.fileNames;

  // 创建编译器实例
  const compilerHost = ts.createCompilerHost(compilerOptions);
  const program = ts.createProgram(
    rootFileNames,
    compilerOptions,
    compilerHost
  );

  // 获取编译的文件列表
  const emittedFiles = program
    .getSourceFiles()
    .filter((sourceFile) => !sourceFile.isDeclarationFile)
    .map((sourceFile) => sourceFile.fileName);

  return emittedFiles;
}

// console.log(await getEslintIncludes());

console.log(getTsIncludes());
