import { HeaderMenu } from "../components/business/menu/HeaderMenu";
import { NavMenu } from "../components/business/menu/nav/NavMenu";
import {
  TemplateGrid,
  TemplateGridItem,
} from "../components/plastic/layout/grid/TemplateGrid";

export const PageContainer = ({ content }: { content: React.ReactNode }) => {
  return (
    <TemplateGrid
      columns="minmax(70px, 5%) 1fr"
      rows="8vh 1fr"
      template={[
        ["header", "header"],
        ["nav", "content"],
      ]}
    >
      <TemplateGridItem gridArea="header">
        <HeaderMenu />
      </TemplateGridItem>
      <TemplateGridItem gridArea="nav">
        <NavMenu />
      </TemplateGridItem>
      <TemplateGridItem gridArea="content"> {content} </TemplateGridItem>
    </TemplateGrid>
  );
};
