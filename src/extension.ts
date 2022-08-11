const nls= require('vscode-nls');
const localize = nls.config({ messageFormat: nls.MessageFormat.both,bundleFormat: nls.BundleFormat.standalone })();
import * as vscode from "vscode";
import { commonFunc } from "./common";


export function activate(context: vscode.ExtensionContext) {

  let disposable = vscode.commands.registerCommand(
    "my-extension.helloWorld",
    () => {
	  const message=localize("msg.hello", "xxx");
      vscode.window.showInformationMessage(message);
	  commonFunc();
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
