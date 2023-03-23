import { writeFileSync } from "fs";
import { join } from "path";
import { Colors, lightColors, darkColors } from "../../shared/colors";
import { opacity } from "../../shared/utils";

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

      // Prompt
      "prompt.background": c.background2,
      "prompt.foreground": c.syntaxFg,
      "prompt.border": c.background4,
      "prompt.inputBackground": c.background1,
      "prompt.inputForeground": c.syntaxFg,
      "prompt.inputBorder": c.background4,

      "terminal.ansiBlack": c.terminalColor0,
      "terminal.ansiRed": c.terminalColor1,
      "terminal.ansiGreen": c.terminalColor2,
      "terminal.ansiYellow": c.terminalColor3,
      "terminal.ansiBlue": c.terminalColor4,
      "terminal.ansiMagenta": c.terminalColor5,
      "terminal.ansiCyan": c.terminalColor6,
      "terminal.ansiWhite": c.terminalColor7,
      "terminal.ansiBrightBlack": c.terminalColor8,
      "terminal.ansiBrightRed": c.terminalColor9,
      "terminal.ansiBrightGreen": c.terminalColor10,
      "terminal.ansiBrightYellow": c.terminalColor11,
      "terminal.ansiBrightBlue": c.terminalColor12,
      "terminal.ansiBrightMagenta": c.terminalColor13,
      "terminal.ansiBrightCyan": c.terminalColor14,
      "terminal.ansiBrightWhite": c.terminalColor15,
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
      name: "TSX focused",
      scope: ["meta.jsx.children.tsx", "entity.name.tag.tsx"],
      settings: {
        foreground: c.uno1,
      },
    },
    {
      name: "TSX dimmed",
      scope: ["entity.other.attribute-name.tsx"],
      settings: {
        foreground: c.uno2,
      },
    },
    {
      name: "Typescript Punctuation",
      scope: ["meta.brace.round.ts"],
      settings: {
        foreground: c.uno4,
      },
    },
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
    {
      name: "Variables",
      scope: [
        "variable",
        "variable.parameter.tsx",
        "variable.object.property.tsx",
        "variable.other.constant.tsx",
        "variable.other.object.tsx",
        "variable.other",
      ],
      settings: {
        foreground: c.duo2,
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
