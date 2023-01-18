import { appendStyle } from "../helpers/appendStyle";

export type Breakpoints<Type> = {
  sm?: Type;
  md?: Type;
};
export const handleBreakpoints = <Type>({
  sm,
  md,
}: Breakpoints<Type>) => ({
  "@media only screen and (max-width: 600px)": appendStyle({ ...sm }),
  "@media only screen and (max-width: 992px) and (min-width: 601px)":
    appendStyle({ ...md }),
});
