import { darkColors, lightColors, Colors } from '../shared/colors'
import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

// Create the themes folder if it doesn't exist
mkdirSync(join(__dirname, "themes"), { recursive: true });

const createTheme = (colors: Colors, isDark = true) => {
  const details = isDark ? 'darker' : 'lighter'
  // Warp themes are yaml files
  return `details: '${details}'
accent: '${colors.syntaxAccent}'
background: '${colors.background1}'
foreground: '${colors.syntaxFg}'
terminal_colors:
  bright:
    black: '${colors.terminalColor0}'
    blue: '${colors.terminalColor4}'
    cyan: '${colors.terminalColor6}'
    green: '${colors.terminalColor2}'
    magenta: '${colors.terminalColor5}'
    red: '${colors.terminalColor1}'
    white: '${colors.terminalColor7}'
    yellow: '${colors.terminalColor3}'
  dim:
    black: '${colors.terminalColor8}'
    blue: '${colors.terminalColor12}'
    cyan: '${colors.terminalColor14}'
    green: '${colors.terminalColor10}'
    magenta: '${colors.terminalColor13}'
    red: '${colors.terminalColor9}'
    white: '${colors.terminalColor15}'
    yellow: '${colors.terminalColor11}'
  normal:
    black: '${colors.terminalColor0}'
    blue: '${colors.terminalColor4}'
    cyan: '${colors.terminalColor6}'
    green: '${colors.terminalColor2}'
    magenta: '${colors.terminalColor5}'
    red: '${colors.terminalColor1}'
    white: '${colors.terminalColor7}'
    yellow: '${colors.terminalColor3}'
`
}

// Write the theme files
writeFileSync(join(__dirname, "themes", "dark-two-firewatch.yaml"), createTheme(darkColors))
writeFileSync(join(__dirname, "themes", "light-two-firewatch.yaml"), createTheme(lightColors, false))

