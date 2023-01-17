export const formatGridTemplate = (
  template: string[][]
): string | undefined => {
  const size = template[0].length;
  return template.reduce((acc, row) => {
    if (acc === undefined) return acc;
    if (row.length !== size) return undefined;

    return `${acc} "${row.join(" ")}"`;
  }, "" as string | undefined);
};
