import { writeFileSync } from "fs";
import { join } from "path";

const toRGB = (hex: string) => {
  const red = parseInt(hex[1] + hex[2], 16);
  const green = parseInt(hex[3] + hex[4], 16);
  const blue = parseInt(hex[5] + hex[6], 16);
  return { red, green, blue };
};

const opacity = (color: string, bg: string, opacity: number) => {
  const foreground = toRGB(color);
  const background = toRGB(bg);

  const red = Math.round(
    foreground.red * opacity + background.red * (1 - opacity)
  );
  const green = Math.round(
    foreground.green * opacity + background.green * (1 - opacity)
  );
  const blue = Math.round(
    foreground.blue * opacity + background.blue * (1 - opacity)
  );

  const toHexString = (num: number) => num.toString(16).padStart(2, "0");
  return "#" + toHexString(red) + toHexString(green) + toHexString(blue);
};

type Colors = {
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

const lightColors: Colors = {
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

const darkColors: Colors = {
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

type Theme = {
  name: string;
  colors: {
    [key: string]: string;
  };
  tokenColors: {
    name: string;
    scope: string[];
    settings: {
      foreground?: string;
      background?: string;
      fontStyle?: string;
    };
  }[];
};

const makeTheme = (c: Colors): Theme => {
  const foreground = c.syntaxFg;
  const o = (fg: string, op: number) => opacity(fg, c.syntaxBg, op);

  const theme: Theme = {
    name: "Two Firewatch",
    colors: {
      // Reference doc https://code.visualstudio.com/api/references/theme-color
      "editor.background": c.syntaxBg,
      "editor.foreground": foreground,
      "editorGroup.border": c.background2,
      "editorGroup.dropBackground": "#ffffff00",
      "editorGroup.emptyBackground": c.background2,
      "editor.renderLineHighlight": c.syntaxCursorLine,

      "selection.background": c.syntaxSelection,

      "activityBarBadge.background": c.syntaxBg,
      "sideBarTitle.foreground": c.syntaxFg,
      "sideBar.background": c.background3,
      "sideBar.foreground": c.syntaxFg,
      "sidebar.border": c.background3,
      "sideBarSectionHeader.background": c.background3,
      "sideBarSectionHeader.foreground": c.syntaxFg,
      "sidebar.selectionBackground": c.syntaxSelection,
      "sidebar.selectionForeground": c.syntaxFg,
      "editorGroupHeader.tabsBackground": c.background3,
      "editorGroupHeader.tabsBorder": c.syntaxBg,
      "tab.activeBackground": c.background3,
      "tab.activeForeground": c.syntaxFg,
      "tab.inactiveBackground": c.background3,
      "tab.inactiveForeground": c.syntaxFg,
      "tab.border": c.syntaxBg,
      "editorLineNumber.foreground": c.syntaxGutter,
      "editorLineNumber.activeForeground": c.syntaxGutter,
      "editorCursor.foreground": c.syntaxFg,
      "editor.selectionBackground": c.syntaxSelection,
      "editor.selectionHighlightBackground": c.syntaxSelection,
      "editor.wordHighlightBackground": c.syntaxSelection,
      "editor.wordHighlightStrongBackground": c.syntaxSelection,
      "editor.findMatchBackground": c.syntaxSelection,
      "editor.findMatchHighlightBackground": c.syntaxSelection,
      "editor.lineHighlightBackground": c.syntaxCursorLine,
      "editorWhitespace.foreground": c.syntaxGutter,
      "editorIndentGuide.background": c.background4,
      "editorIndentGuide.activeBackground": c.background4,
      "editorRuler.foreground": c.syntaxGutter,
      "editorCodeLens.foreground": c.syntaxGutter,
      "editorBracketMatch.background": c.syntaxSelection,

      // Git
      "gitDecoration.addedResourceForeground": c.syntaxColorAdded,
      "gitDecoration.modifiedResourceForeground": c.syntaxColorModified,
      "gitDecoration.deletedResourceForeground": c.syntaxColorRemoved,
      "gitDecoration.untrackedResourceForeground": c.syntaxColorAdded,
      "diffEditor.insertedTextBackground": o(c.syntaxColorAdded, 0.1),
      "diffEditor.removedTextBackground": o(c.syntaxColorRemoved, 0.1),

      // Removing shadow
      "scollbar.shadow": "#ffffff00",
      "widget.shadow": "#ffffff00",

      // Panel / Terminal
      "terminal.foreground": c.syntaxFg,
      "terminal.background": c.background2,
      "panel.background": c.background2,
      "panel.border": c.background2,
      "panelTitle.activeBorder": c.syntaxAccent,
      "panelTitle.activeForeground": c.syntaxFg,
      "panelTitle.inactiveForeground": c.syntaxGutter,
      "statusBar.background": c.background2,
      "statusBar.foreground": c.syntaxFg,
      "terminal.ansiBlack": c.background2,

      // Prompt
      "prompt.background": c.background2,
      "prompt.foreground": c.syntaxFg,
      "prompt.border": c.background4,
      "prompt.inputBackground": c.background1,
      "prompt.inputForeground": c.syntaxFg,
      "prompt.inputBorder": c.background4,
    },
    tokenColors: [
      {
        name: "Punctuation",
        scope: ["punctuation", "expression"],
        settings: {
          foreground: c.uno4,
        },
      },
      {
        name: "Comment",
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          fontStyle: "italic",
          foreground: c.uno4,
        },
      },
      {
        name: "Variables",
        scope: ["variable", "string constant.other.placeholder"],
        settings: {
          foreground: c.duo2,
        },
      },
      {
        name: "Colors",
        scope: ["constant.other.color"],
        settings: {
          foreground,
        },
      },
      {
        name: "Invalid",
        scope: ["invalid", "invalid.illegal"],
        settings: {
          foreground,
        },
      },
      {
        name: "Keyword, Storage",
        scope: [
          "keyword",
          "storage.type.js",
          "storage.type.function.js",
          "variable.other.flowtype.js",
          "storage.type.extends.js",
          "storage.type.function.js",
          "storage.type.class.js",
          "meta.class.tsx",
        ],
        settings: {
          foreground: c.uno4,
        },
      },
      {
        name: "Operator, Misc",
        scope: [
          "constant.other.color",
          "punctuation",
          "meta.tag",
          "punctuation.definition.tag",
          "punctuation.separator.inheritance.php",
          "punctuation.definition.tag.html",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
          "meta.brace.square.tsx",
          "meta.type.tuple.tsx",
          "punctuation.section.embedded",
          "keyword.other.template",
          "keyword.other.substitution",
        ],
        settings: {
          foreground: c.uno4,
        },
      },
      {
        name: "Tag",
        scope: [
          "entity.name.tag",
          "meta.tag.sgml",
          "markup.deleted.git_gutter",
        ],
        settings: {
          foreground,
        },
      },
      {
        name: "Function, Special Method",
        scope: [
          "entity.name.function",
          "meta.function-call",
          "variable.function",
          "support.function",
          "keyword.other.special-method",
        ],
        settings: {
          foreground,
        },
      },
      {
        name: "Block Level Variables",
        scope: ["meta.block variable.other"],
        settings: {
          foreground: c.duo2,
        },
      },
      {
        name: "Other Variable, String Link",
        scope: ["support.other.variable", "string.other.link"],
        settings: {
          foreground: c.duo2,
        },
      },
      {
        name: "Function Argument, Tag Attribute, Embedded",
        scope: [
          "variable.parameter",
          "keyword.other.unit",
          "keyword.other",
          "meta.object-literal.key.tsx",
          "meta.object.member.tsx",
        ],
        settings: {
          foreground,
        },
      },
      {
        name: "String, Symbols, Inherited Class, Markup Heading, Number, Constant",
        scope: [
          "string",
          "constant.other.symbol",
          "constant.other.key",
          "entity.other.inherited-class",
          "markup.heading",
          "markup.inserted.git_gutter",
          "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
          "constant.numeric",
          "constant.language",
          "support.constant",
          "constant.character",
          "constant.escape",
        ],
        settings: {
          foreground: c.duo1,
        },
      },
      {
        name: "Class, Support",
        scope: [
          "entity.name",
          "support.type",
          "support.class",
          "support.other.namespace.use.php",
          "meta.use.php",
          "support.other.namespace.php",
          "markup.changed.git_gutter",
          "support.type.sys-types",
        ],
        settings: {
          foreground: c.duo1,
        },
      },
      {
        name: "Entity Types",
        scope: ["support.type"],
        settings: {
          foreground: c.duo1,
        },
      },
      {
        name: "Sub-methods",
        scope: [
          "entity.name.module.js",
          "variable.import.parameter.js",
          "variable.other.class.js",
        ],
        settings: {
          foreground: c.uno1,
        },
      },
      {
        name: "Language methods",
        scope: ["variable.language"],
        settings: {
          fontStyle: "italic",
          foreground: c.uno4,
        },
      },
      {
        name: "entity.name.method.js",
        scope: ["entity.name.method.js"],
        settings: {
          fontStyle: "italic",
          foreground: c.uno1,
        },
      },
      {
        name: "meta.method.js",
        scope: [
          "meta.class-method.js entity.name.function.js",
          "variable.function.constructor",
        ],
        settings: {
          foreground: c.uno1,
        },
      },
      {
        name: "Attributes",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: c.uno1,
        },
      },
      {
        name: "HTML Attributes",
        scope: [
          "text.html.basic entity.other.attribute-name.html",
          "text.html.basic entity.other.attribute-name",
        ],
        settings: {
          fontStyle: "italic",
          foreground: c.uno1,
        },
      },
      {
        name: "URL",
        scope: ["*url*", "*link*", "*uri*"],
        settings: {
          fontStyle: "underline",
        },
      },
      {
        name: "Decorators",
        scope: [
          "tag.decorator.js entity.name.tag.js",
          "tag.decorator.js punctuation.definition.tag.js",
        ],
        settings: {
          fontStyle: "italic",
          foreground: c.duo1,
        },
      },
      {
        name: "ES7 Bind Operator",
        scope: [
          "source.js constant.other.object.key.js string.unquoted.label.js",
        ],
        settings: {
          fontStyle: "italic",
          foreground: c.duo1,
        },
      },
    ],
  };

  // Adding typescript specific styling
  theme.tokenColors = theme.tokenColors.concat([
    {
      name: "Storage, Type",
      scope: [
        "storage.type.tsx",
        "meta.var.expr.tsx",
        "keyword.control",
        "keyword.control.import.tsx",
        "keyword.control.from.tsx",
        "storage.type.type.tsx",
        "meta.type.declaration.tsx",
        "meta.import.tsx",
      ],
      settings: {
        foreground: c.uno3,
      },
    },

    // I want Debugger to be a different color than the rest of the keywords
    {
      name: "Debugger",
      scope: ["keyword.other.debugger"],
      settings: {
        foreground: c.syntaxAccent,
        fontStyle: "bold",
      },
    },
  ]);

  return theme;
};

const themesDir = join(__dirname, "..", "themes");
// write theme to json file
writeFileSync(
  join(themesDir, "two-firewatch-color-theme-dark.json"),
  JSON.stringify(makeTheme(darkColors), null, 2)
);
writeFileSync(
  join(themesDir, "two-firewatch-color-theme-light.json"),
  JSON.stringify(makeTheme(lightColors), null, 2)
);
