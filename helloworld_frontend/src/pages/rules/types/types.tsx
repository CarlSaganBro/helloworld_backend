import React from "react";

export interface RuleContent {
  content: string;
  reason?: string;
}

export interface PageDefinition {
  path: string;
  title: string;
  element: () => React.JSX.Element;
  subPages?: PageDefinition[];
}

export interface RulesPageDefinition extends PageDefinition {
  content: RuleContent[];
}
