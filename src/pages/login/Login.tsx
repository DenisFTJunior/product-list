/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { LoginButton } from "../../components/business/actions/login/LoginButton";
import { TextInput } from "../../components/base/form/TextInput";
import { Logo } from "../../components/business/presentation/Logo";
import { TextButton } from "../../components/plastic/action/TextButton";
import { Flex } from "../../components/plastic/layout/Flex";
import {
  TemplateGrid,
  TemplateGridItem,
} from "../../components/plastic/layout/grid/TemplateGrid";
import { Typography } from "../../components/plastic/structure/Typography";
import { ALMOST_BLACK, GREEN_BLUE } from "../../toolbox/constants/colors";
import { useAppDispatch, useAppSelector } from "../../toolbox/stores/hooks";
import {
  fillPassword,
  fillUsername,
  login,
  validateForm,
} from "../../toolbox/stores/login/actions";

export const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const { form, logged } = useAppSelector((state) => state.login);

  const navigate = useNavigate();

  const onSubmit = () => {
    dispatch(validateForm());
    dispatch(login());
  };

  useEffect(() => {
    if (!form.hasError && logged) {
      navigate("/dashboard");
    }
  }, [logged, navigate]);

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
            <TextInput
              placeholder="Username"
              onChange={(e) => dispatch(fillUsername(e.target.value))}
              value={form.username}
            />
            <TextInput
              placeholder="Password"
              onChange={(e) => dispatch(fillPassword(e.target.value))}
              value={form.password}
              type="password"
            />
            <Flex justifyContent="space-between" height={"max-content"}>
              <TextButton
                text="forgot password"
                sm={{ size: "20px" }}
                color={`${ALMOST_BLACK}98`}
              />
              <LoginButton onClick={onSubmit} />
            </Flex>
            {form.hasError && (
              <Typography text={form.errorMessage} color="red" element="span" />
            )}
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
