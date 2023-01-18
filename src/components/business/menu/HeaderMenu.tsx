import { BLUE } from "../../../toolbox/constants/colors";
import { useAppSelector } from "../../../toolbox/stores/hooks";
import { Flex, FlexItem } from "../../plastic/layout/Flex";
import { Position } from "../../plastic/layout/Position";
import { Card } from "../../plastic/structure/Card";
import { FastActions } from "../actions/FastActions";
import { Logo } from "../presentation/Logo";
import { QuestionAndAnswers } from "../presentation/Questions";
import { UserInfo } from "../presentation/UserInfo";

//useQuery params to get selected page
export const HeaderMenu = () => {
  const { loggedUser } = useAppSelector((state) => state.login);

  return (
    <Card background={BLUE} padding="5px 50px" width="100%" height="8vh">
      <Flex flexDirection="row" justifyContent="flex-start" alignItems="center">
        <FlexItem alignSelf="flex-end" flex={4}>
          <Logo whiteLogo />
        </FlexItem>
        <FlexItem flex={1}>
          <Flex justifyContent="space-evenly">
            <FlexItem>
              <FastActions />
            </FlexItem>
            <FlexItem>
              <QuestionAndAnswers />{" "}
            </FlexItem>

            <FlexItem flex={3}>
              <UserInfo username={loggedUser} />
            </FlexItem>
          </Flex>
        </FlexItem>
      </Flex>
    </Card>
  );
};
