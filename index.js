const WORKBENCH = "#00000C";
const BACKGROUND = "#00030F";
const FOREGROUND = "#8695b7";
const UI_GRAY = "#1d2433";
const ACCENT = "#00B09C";

const RED = "#F92672";
const GREEN = "#A6E22E";
const YELLOW = "#E6DB74";
// const ORANGE = "#FD971F";
const BLUE = "#66D9EF";
const PURPLE = "#AE81FF";
const MAGENTA = PURPLE;
const WHITE = "#F0F0F0";
const CYAN = "#00FFFF";
const LIGHT_GRAY = "#A0A8B9";
const GRAY = "#2f3b54";

const colors = {
  black: WORKBENCH,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: CYAN,
  white: LIGHT_GRAY,
  lightBlack: GRAY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: CYAN,
  lightWhite: LIGHT_GRAY,
  colorCubes: WHITE,
  grayscale: UI_GRAY,
};

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    fontSize: 14,
    fontFamily:
      "JetBrains Mono, Cascadia Mono SemiBold, Geist Mono, Geist Mono SemiBold, Cascadia Mono, Fira Mono, Fira Code, Menlo, Lucida Console, monospace",
    fontWeight: "normal",
    fontWeightBold: "normal",
    lineHeight: 1.3,
    cursorColor: ACCENT,
    cursorShape: "BLOCK",
    cursorBlink: true,
    foregroundColor: FOREGROUND,
    backgroundColor: BACKGROUND,
    selectionColor: "#2f3b5477",
    borderColor: GRAY,
    css: `
    .hyper_main {
      border: none !important;
    }
    .header_header {
      background: ${WORKBENCH} !important;
    }
    .tab_tab {
      color: ${FOREGROUND};
      background: ${WORKBENCH} !important;
      border: 0;
      transition: background 0.3s ease, color 0.3s ease;
    }
    .tab_tab:hover {
      color: ${WHITE};
      background: rgba(0, 176, 156, .20) !important;
      border-bottom: 1px solid ${ACCENT} !important;
    }
    .tab_tab.tab_active {
      color: ${ACCENT};
      border-bottom: 1px solid ${ACCENT} !important;
      background: ${BACKGROUND} !important;
    }
    .tabs_borderShim {
      border-color: transparent !important;
    } 
    ${config.css || ""}
    `,
    colors,
  });
