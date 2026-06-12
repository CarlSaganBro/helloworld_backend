import { TeamTile } from "./TeamTile.tsx";
import "./style/TeamsPage.css";

export const TeamsPage = ({}) => {
  return (
    <div className="teamsPageContainer">
      <TeamTile />
      <TeamTile />
      <TeamTile />
    </div>
  );
};
