import { Project } from "ts-morph";

const appCheckFolders = [
  "app",
  "shared",
  "entities",
  "features",
  "pages",
  "widgets",
];

const isAbsolutePath = (path: string) => {
  return appCheckFolders.some((val) => path.startsWith(val));
};

const updateImportsPaths = () => {
  const project = new Project({});

  // add source files
  project.addSourceFilesAtPaths("src/**/*.ts");
  project.addSourceFilesAtPaths("src/**/*.tsx");

  const files = project.getSourceFiles();

  files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((oneImport) => {
      const name = oneImport.getModuleSpecifierValue();

      if (isAbsolutePath(name)) {
        oneImport.setModuleSpecifier(`@/${name}`);
      }
    });
  });

  project.save();
};

updateImportsPaths();
