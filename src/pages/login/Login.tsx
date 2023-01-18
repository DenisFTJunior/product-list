/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { LoginButton } from "../../components/base/actions/LoginButton";
import { TextInput } from "../../components/base/form/TextInput";
import { Logo } from "../../components/business/presentation/Logo";
import { TextButton } from "../../components/plastic/action/TextButton";
import { Flex, FlexItem } from "../../components/plastic/layout/Flex";
import {
  TemplateGrid,
  TemplateGridItem,
} from "../../components/plastic/layout/grid/TemplateGrid";
import { Typography } from "../../components/plastic/structure/Typography";
import { GREEN_BLUE } from "../../toolbox/constants/colors";

export const LoginScreen = () => {
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div css={{ width: "100vw", height: "100vh" }}>
      <TemplateGrid
        columns="1fr 3fr"
        template={[["form", "background"]]}
        sm={{ columns: "1fr", template: [["form"]] }}
      >
        <TemplateGridItem gridArea="form">
          <Flex
            flexDirection="column"
            padding={"0 20px"}
            alignItems="flex-start"
          >
            <Logo />
            <TextInput placeholder="Username" />
            <TextInput placeholder="Password" />
            <Flex justifyContent="space-between" height={"max-content"}>
              <TextButton text="forgot password" sm={{size:"20px"}}/>
              <LoginButton onClick={handleSubmit} />
            </Flex>
          </Flex>
        </TemplateGridItem>
        <TemplateGridItem gridArea="background">
          <div
            css={css({
              background: GREEN_BLUE,
              width: "100%",
              height: "100%",
            })}
          />
        </TemplateGridItem>
      </TemplateGrid>
    </div>
  );
};
