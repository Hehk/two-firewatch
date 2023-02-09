import { writeFileSync } from "fs";
import { join } from "path";

type Colors = {
  uno_1: string;
  uno_2: string;
  uno_3: string;
  uno_4: string;

  duo_1: string;
  duo_2: string;
  duo_3: string;

  syntax_color_renamed: string;
  syntax_color_added: string;
  syntax_color_modified: string;
  syntax_color_removed: string;

  syntax_fg: string;
  syntax_bg: string;
  syntax_accent: string;
  syntax_gutter: string;
  syntax_selection: string;
  syntax_fold_bg: string;
  syntax_cursor_line: string;
};

const lightColors: Colors = {
  uno_1: "#2d2006",
  uno_2: "#896724",
  uno_3: "#B29762",
  uno_4: "#B6ad9a",

  duo_1: "#065289",
  duo_2: "#718ecd",
  duo_3: "#aeb3b7",

  syntax_color_renamed: "#33a0ff",
  syntax_color_added: "#43d08a",
  syntax_color_modified: "#e0c285",
  syntax_color_removed: "#e05252",

  syntax_fg: "#896724",
  syntax_bg: "#FAF8F5",
  syntax_accent: "#447EBB",
  syntax_gutter: "#EAE1D2",
  syntax_selection: "#E5DDCB",
  syntax_fold_bg: "#d1cec7",
  syntax_cursor_line: "#F3EFE7",
};

/*
  *   let g:terminal_color_0 = "#282c34"
  let g:terminal_color_8 = "#282c34"
  let g:terminal_color_1 = "#e06c75"
  let g:terminal_color_9 = "#e06c75"
  let g:terminal_color_2 = "#98c379"
  let g:terminal_color_10 = "#98c379"
  let g:terminal_color_3 = "#e5c07b"
  let g:terminal_color_11 = "#e5c07b"
  let g:terminal_color_4 = "#61afef"
  let g:terminal_color_12 = "#61afef"
  let g:terminal_color_5 = "#c678dd"
  let g:terminal_color_13 = "#c678dd"
  let g:terminal_color_6 = "#56b6c2"
  let g:terminal_color_14 = "#56b6c2"
  let g:terminal_color_7 = "#dcdfe4"
  let g:terminal_color_15 = "#dcdfe4"
*/
const darkColors: Colors = {
  uno_1: "#d6e9ff",
  uno_2: "#abb2bf",
  uno_3: "#6e88a6",
  uno_4: "#55606d",

  duo_1: "#c8ae9d",
  duo_2: "#e06c75",
  duo_3: "#dd672c",

  syntax_color_renamed: "#33a0ff",
  syntax_color_added: "#43d08a",
  syntax_color_modified: "#e0c285",
  syntax_color_removed: "#e05252",

  syntax_fg: "#abb2bf",
  syntax_bg: "#282c34",
  syntax_accent: "#56b6c2",
  syntax_gutter: "#636d83",
  syntax_selection: "#3e4452",
  syntax_fold_bg: "#5c6370",
  syntax_cursor_line: "#2c323c",
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
  const foreground = c.syntax_fg;

  const theme: Theme = {
    name: "Two Firewatch",
    colors: {
      // Reference doc https://code.visualstudio.com/api/references/theme-color
      "editor.background": c.syntax_bg,
      "editor.foreground": foreground,
      "selection.background": c.syntax_selection,
      "editor.selectionHighlightBorder": `1px solid blue`,

      "activityBarBadge.background": c.syntax_bg,
      "sideBarTitle.foreground": c.syntax_fg,
      "sideBar.background": c.syntax_bg,
      "sideBar.foreground": c.syntax_fg,
      "sideBar.border": c.uno_4,
      "sideBarSectionHeader.background": c.syntax_bg,
      "sideBarSectionHeader.foreground": c.syntax_fg,
      "editorGroupHeader.tabsBackground": c.syntax_bg,
      "editorGroupHeader.tabsBorder": c.syntax_bg,
      "tab.activeBackground": c.syntax_bg,
      "tab.activeForeground": c.syntax_fg,
      "tab.inactiveBackground": c.syntax_bg,
      "tab.inactiveForeground": c.syntax_fg,
      "tab.border": c.syntax_bg,
      "editorLineNumber.foreground": c.syntax_gutter,
      "editorLineNumber.activeForeground": c.syntax_gutter,
      "editorCursor.foreground": c.syntax_fg,
      "editor.selectionBackground": c.syntax_selection,
      "editor.selectionHighlightBackground": c.syntax_selection,
      "editor.wordHighlightBackground": c.syntax_selection,
      "editor.wordHighlightStrongBackground": c.syntax_selection,
      "editor.findMatchBackground": c.syntax_selection,
      "editor.findMatchHighlightBackground": c.syntax_selection,
      "editor.lineHighlightBackground": c.syntax_cursor_line,
      "editorWhitespace.foreground": c.syntax_gutter,
      "editorIndentGuide.background": c.syntax_gutter,
      "editorIndentGuide.activeBackground": c.syntax_gutter,
      "editorRuler.foreground": c.syntax_gutter,
      "editorCodeLens.foreground": c.syntax_gutter,
      "editorBracketMatch.background": c.syntax_selection,
      "gitDecoration.addedResourceForeground": c.syntax_color_added,
      "gitDecoration.modifiedResourceForeground": c.syntax_color_modified,
      "gitDecoration.deletedResourceForeground": c.syntax_color_removed,
      "gitDecoration.untrackedResourceForeground": c.syntax_color_added,
    },
    tokenColors: [
      {
        name: "Punctuation",
        scope: ["punctuation", "expression"],
        settings: {
          foreground: c.uno_4,
        },
      },
      {
        name: "Comment",
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          fontStyle: "italic",
          foreground: c.uno_4,
        },
      },
      {
        name: "Variables",
        scope: ["variable", "string constant.other.placeholder"],
        settings: {
          foreground: c.duo_2,
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
          foreground: c.uno_4,
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
          foreground: c.uno_4,
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
          foreground: c.duo_2,
        },
      },
      {
        name: "Other Variable, String Link",
        scope: ["support.other.variable", "string.other.link"],
        settings: {
          foreground: c.duo_2,
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
        name: "Types",
        scope: ["entity.name.type.tsx", "meta.type.annotation.tsx"],
        settings: {
          foreground: c.duo_3,
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
          foreground: c.duo_1,
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
          foreground: c.duo_1,
        },
      },
      {
        name: "Entity Types",
        scope: ["support.type"],
        settings: {
          foreground: c.duo_1,
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
          foreground: c.uno_1,
        },
      },
      {
        name: "Language methods",
        scope: ["variable.language"],
        settings: {
          fontStyle: "italic",
          foreground: c.uno_4,
        },
      },
      {
        name: "entity.name.method.js",
        scope: ["entity.name.method.js"],
        settings: {
          fontStyle: "italic",
          foreground: c.uno_1,
        },
      },
      {
        name: "meta.method.js",
        scope: [
          "meta.class-method.js entity.name.function.js",
          "variable.function.constructor",
        ],
        settings: {
          foreground: c.uno_1,
        },
      },
      {
        name: "Attributes",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: c.uno_1,
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
          foreground: c.uno_1,
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
          foreground: c.duo_1,
        },
      },
      {
        name: "ES7 Bind Operator",
        scope: [
          "source.js constant.other.object.key.js string.unquoted.label.js",
        ],
        settings: {
          fontStyle: "italic",
          foreground: c.duo_1,
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
        foreground: c.uno_3,
      },
    },

    // I want Debugger to be a different color than the rest of the keywords
    {
      name: "Debugger",
      scope: ["keyword.other.debugger"],
      settings: {
        foreground: c.syntax_accent,
        fontStyle: "bold",
      },
    },
  ]);

  return theme;
};

const themesDir = join(__dirname, "..", "themes");
// write theme to json file
writeFileSync(
  join(themesDir, "Two Firewatch-color-theme-dark.json"),
  JSON.stringify(makeTheme(darkColors), null, 2)
);
writeFileSync(
  join(themesDir, "Two Firewatch-color-theme-light.json"),
  JSON.stringify(makeTheme(lightColors), null, 2)
);
