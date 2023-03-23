export const toRGB = (hex: string) => {
  const red = parseInt(hex[1] + hex[2], 16);
  const green = parseInt(hex[3] + hex[4], 16);
  const blue = parseInt(hex[5] + hex[6], 16);
  return { red, green, blue };
};

export const opacity = (color: string, bg: string, opacity: number) => {
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