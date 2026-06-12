import logo from "../../../assets/Overwatch-Logo-PNG.png";
import "./style/TeamTile.css";

export const TeamTile = ({}) => {
  return (
    <div className="teamTile">
      {/* Logo */}
      <div className="teamTileLogoContainer">
        <img src={logo} alt="Logo" className="teamTileLogo" />
      </div>

      <span className="teamTileTitle">
        <b>Team Name Here</b>
      </span>

      {/* Text content */}
      <div className="teamTileContent">
        {[
          "Team Member 1",
          "Team Member 2",
          "Team Member 3",
          "Team Member 4",
          "Team Member 5",
          "Team Member 6",
        ].map((line, i) => (
          <p key={i} className="teamTileText">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
