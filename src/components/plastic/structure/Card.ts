import { CSSProperties } from "@emotion/serialize";
import styled from "@emotion/styled";
import { GREEN } from "../../../toolbox/constants/colors";
import { FlexContainerProps } from "../../../types/flex";
import { SizeProps } from "../../../types/size";

export const Card = styled.div(
  ({
    width,
    height,
    shadowColor,
    border,
    ...rest
  }: Partial<SizeProps & { shadowColor: string }> &
    Pick<CSSProperties, "border">) => ({
    width: width || "100%",
    height: height || "100%",
    boxShadow: `0px 4px 4px ${shadowColor || GREEN}25`,
    border: border || "none",
    ...rest,
  })
);
