export const required = (value: any) => {
  if (typeof value === "object") return Object.keys(value).length > 0;
  else if (typeof value === "string") return value.trim().length > 0;
  else if (typeof value === "number") return value > 0;
  else if (Array.isArray(value)) return value.length > 0;
  return value !== undefined && value !== null;
};
