import { TeamTile } from "./TeamTile.tsx";

export const TeamsPage = ({}) => {
  return (
    <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
      <TeamTile />
      <TeamTile />
      <TeamTile />
    </div>
  );
};
