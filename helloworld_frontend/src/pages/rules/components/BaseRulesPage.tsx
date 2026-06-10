import React from "react";

export const BaseRulesPage = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {children}
    </div>
  );
};
