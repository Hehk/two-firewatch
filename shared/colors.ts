import { opacity } from "./utils";

export type Colors = {
  uno1: string;
  uno2: string;
  uno3: string;
  uno4: string;

  duo1: string;
  duo2: string;
  duo3: string;

  syntaxColorRenamed: string;
  syntaxColorAdded: string;
  syntaxColorModified: string;
  syntaxColorRemoved: string;

  syntaxFg: string;
  syntaxBg: string;
  panelBg: string;
  syntaxAccent: string;
  syntaxGutter: string;
  syntaxSelection: string;
  syntaxFoldBg: string;
  syntaxCursorLine: string;

  background1: string;
  background2: string;
  background3: string;
  background4: string;

  terminalColor0: string;
  terminalColor1: string;
  terminalColor2: string;
  terminalColor3: string;
  terminalColor4: string;
  terminalColor5: string;
  terminalColor6: string;
  terminalColor7: string;
  terminalColor8: string;
  terminalColor9: string;
  terminalColor10: string;
  terminalColor11: string;
  terminalColor12: string;
  terminalColor13: string;
  terminalColor14: string;
  terminalColor15: string;
};

export const lightColors: Colors = {
  uno1: "#2d2006",
  uno2: "#896724",
  uno3: "#B29762",
  uno4: "#B6ad9a",

  duo1: "#065289",
  duo2: "#718ecd",
  duo3: "#aeb3b7",

  syntaxColorRenamed: "#33a0ff",
  syntaxColorAdded: "#43d08a",
  syntaxColorModified: "#e0c285",
  syntaxColorRemoved: "#e05252",

  syntaxFg: "#896724",
  syntaxBg: "#FAF8F5",
  panelBg: "#F3EFE7",
  syntaxAccent: "#447EBB",
  syntaxGutter: "#EAE1D2",
  syntaxSelection: "#E5DDCB",
  syntaxFoldBg: "#d1cec7",
  syntaxCursorLine: "#F3EFE7",

  background1: "#FAF8F5",
  background2: opacity("#FAF8F5", "#ffffff", 0.5),
  background3: opacity("#FAF8F5", "#ffffff", 0.25),
  background4: opacity("#FAF8F5", "#ffffff", 0.25),

  terminalColor0: "#282c34",
  terminalColor1: "#e06c75",
  terminalColor2: "#98c379",
  terminalColor3: "#e5c07b",
  terminalColor4: "#61afef",
  terminalColor5: "#c678dd",
  terminalColor6: "#56b6c2",
  terminalColor7: "#dcdfe4",
  terminalColor8: "#282c34",
  terminalColor9: "#e06c75",
  terminalColor10: "#98c379",
  terminalColor11: "#e5c07b",
  terminalColor12: "#61afef",
  terminalColor13: "#c678dd",
  terminalColor14: "#56b6c2",
  terminalColor15: "#dcdfe4",
};

export const darkColors: Colors = {
  uno1: "#d6e9ff",
  uno2: "#abb2bf",
  uno3: "#6e88a6",
  uno4: "#55606d",

  duo1: "#c8ae9d",
  duo2: "#e06c75",
  duo3: "#dd672c",

  syntaxColorRenamed: "#33a0ff",
  syntaxColorAdded: "#43d08a",
  syntaxColorModified: "#e0c285",
  syntaxColorRemoved: "#e05252",

  syntaxFg: "#abb2bf",
  syntaxBg: "#282c34",
  panelBg: "#0C1119",
  syntaxAccent: "#56b6c2",
  syntaxGutter: "#636d83",
  syntaxSelection: "#3e4452",
  syntaxFoldBg: "#5c6370",
  syntaxCursorLine: "#2c323c",

  background1: "#282c34",
  background2: opacity("#282c34", "#000000", 0.75),
  background3: opacity("#282c34", "#000000", 0.5),
  background4: opacity("#282c34", "#000000", 0.25),

  terminalColor0: "#282c34",
  terminalColor1: "#e06c75",
  terminalColor2: "#98c379",
  terminalColor3: "#e5c07b",
  terminalColor4: "#61afef",
  terminalColor5: "#c678dd",
  terminalColor6: "#56b6c2",
  terminalColor7: "#dcdfe4",
  terminalColor8: "#282c34",
  terminalColor9: "#e06c75",
  terminalColor10: "#98c379",
  terminalColor11: "#e5c07b",
  terminalColor12: "#61afef",
  terminalColor13: "#c678dd",
  terminalColor14: "#56b6c2",
  terminalColor15: "#dcdfe4",
};