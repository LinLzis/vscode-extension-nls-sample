const nls = require("vscode-nls");
const localize = nls.loadMessageBundle();
import * as vscode from "vscode";

export const commonFunc = () => {
  const message = localize("msg.test", "Test i18n");
  vscode.window.showInformationMessage(message);
};
