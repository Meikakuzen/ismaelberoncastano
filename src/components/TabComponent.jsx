import { Tabs } from "keep-react";

export const TabsComponent = () => {
  return (
    <Tabs aria-label="Tabs" style="pills">
      <Tabs.Item title="Projectes">Dashboard content</Tabs.Item>
      <Tabs.Item title="Sobre mi">Settings content</Tabs.Item>
    </Tabs>
  );
}
