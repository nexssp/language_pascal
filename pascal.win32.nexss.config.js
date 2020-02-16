let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Pascal";
languageConfig.description =
  "Pascal is an imperative and procedural programming language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices using structured programming and data structuring.";
languageConfig.url = "https://www.freepascal.org/";
languageConfig.extensions = [".pas"];
languageConfig.executeCommandLine = "fpc";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "fpc";
languageConfig.builders = {};
languageConfig.compilers = {
  fpc: {
    install: `powershell -Command "echo 'Installing Free Pascal..' ;(New-Object Net.WebClient).DownloadFile('https://netix.dl.sourceforge.net/project/freepascal/Win32/3.0.4/fpc-3.0.4.i386-win32.exe', '${process.env.NEXSS_CACHE_PATH}/fpc-3.0.4.i386-win32.exe')"; ${process.env.NEXSS_CACHE_PATH}/fpc-3.0.4.i386-win32.exe /silent /nocancel /suppressmsgboxes=no`,
    command: "fpc",
    args: "<file> && <fileNoExt>.exe",
    help: ``
  }
};
languageConfig.errors = require("./nexss.pascal.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
