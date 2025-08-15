"use client";

import { Tab, Header, Menu } from "semantic-ui-react";
import ProfessionalResume from "../Professional";
import Portfolio from "../Portfolio";

const panes = [
  {
    menuItem: (
      <Menu.Item key="Professional">
        <Header size="medium">Professional</Header>
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane key="profession" size="huge">
        <ProfessionalResume />
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key="Passion">
        <Header size="medium">Passion</Header>
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane key="Portfolio" size="huge">
        <Portfolio />
      </Tab.Pane>
    ),
  },
];

const LifeExperienceTabs = () => {
  return (
    <Tab
      renderActiveOnly={false}
      menu={{
        fluid: true,
        attached: true,
        tabular: true,
        widths: 2,
        size: "massive",
      }}
      panes={panes}
    />
  );
};

export default LifeExperienceTabs;
