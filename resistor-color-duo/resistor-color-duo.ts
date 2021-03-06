function getValueOfColor(color: string): number {
  switch (color) {
    case "black":
      return 0;

    case "brown":
      return 1;

    case "red":
      return 2;

    case "orange":
      return 3;

    case "yellow":
      return 4;

    case "green":
      return 5;

    case "blue":
      return 6;

    case "violet":
      return 7;

    case "grey":
      return 8;

    case "white":
      return 9;

    default:
      return -1;
  }
}
export function decodedValue(colorBands: string[]): number {
  const firstNum: number = getValueOfColor(colorBands[0]);
  const secondNum: number = getValueOfColor(colorBands[1]);
  return firstNum * 10 + secondNum;
}
