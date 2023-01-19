import { HeaderMenu } from "../components/business/menu/HeaderMenu";
import { NavMenu } from "../components/business/menu/nav/NavMenu";
import {
  TemplateGrid,
  TemplateGridItem,
} from "../components/plastic/layout/grid/TemplateGrid";
import { Position } from "../components/plastic/layout/Position";

export const PageContainer = ({ content }: { content: React.ReactNode }) => {
  return (
    <TemplateGrid
      columns="minmax(70px, 5%) 1fr"
      rows="8vh 1fr"
      template={[
        ["header", "header"],
        ["nav", "content"],
      ]}
      sm={{
        columns: "1fr",
        rows: "8vh 84vh 8vh",
        template: [["header"], ["content"], ["nav"]],
      }}
    >
      <TemplateGridItem gridArea="header">
        <HeaderMenu />
      </TemplateGridItem>
      <TemplateGridItem gridArea="nav">
        <Position
          position="inherit"
          height={"100%"}
          sm={{
            position: "fixed",
            zIndex: 100,
            bottom: 0,
            height: "8vh",
            width: "100%",
          }}
        >
          <NavMenu />
        </Position>
      </TemplateGridItem>
      <TemplateGridItem gridArea="content">
        <div style={{ padding: "6% 4%" }}>{content}</div>
      </TemplateGridItem>
    </TemplateGrid>
  );
};
