import logo from "../../../assets/Overwatch-Logo-PNG.png";

export const TeamTile = ({}) => {
  return (
    <div
      style={{
        width: "260px",
        height: "340px",
        background: "#f4f4f6",
        borderRadius: "16px",
        padding: "16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid rgba(0,0,0,0.08)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "120px",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <span>
        <b>Team Name Here</b>
      </span>
      {/* Text content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          overflow: "hidden",
        }}
      >
        {[
          "Team Member 1",
          "Team Member 2",
          "Team Member 3",
          "Team Member 4",
          "Team Member 5",
          "Team Member 6",
        ].map((line, i) => (
          <p
            key={i}
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#333",
              lineHeight: "1.3",
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
