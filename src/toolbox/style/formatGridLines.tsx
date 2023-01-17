import { Line } from "./types/grid";

export const formatGridLines = (line: Line) => {
  if (!Boolean(line)) return undefined;
  const getSize = () => {
    if (line.size) {
      return line.minSize
        ? `minmax(${line.minSize}, ${line.size}) `
        : line.size;
    }
    if (line.minSize) {
      return `minmax(${line.minSize}, 1fr)`;
    }
    return "minmax(200px, 1fr)";
  };

  return `repeat(${line.repeat || "auto-fit"}, ${getSize()})`;
};
