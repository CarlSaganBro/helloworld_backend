import type { Countdown } from "../hooks/useCountdown.tsx";
import { CountdownNumber } from "./CountdownNumber.tsx";

export const CountdownWidget = ({
  countdown,
  flavorText,
}: {
  countdown: Countdown;
  flavorText?: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center",
        fontSize: "12px",
        textTransform: "uppercase",
        background: "#F2F2F2",
        borderRadius: "8px",
        margin: "16px",
        width: "450px",
      }}
    >
      {flavorText}
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <CountdownNumber num={countdown.days} descriptor={"Days"} />
        <div style={{ fontSize: "64px" }}>:</div>
        <CountdownNumber num={countdown.hours} descriptor={"Hours"} />
        <div style={{ fontSize: "64px" }}>:</div>
        <CountdownNumber num={countdown.minutes} descriptor={"Minutes"} />
        <div style={{ fontSize: "64px" }}>:</div>
        <CountdownNumber num={countdown.seconds} descriptor={"Seconds"} />
      </div>
      <div style={{ fontSize: "24px", paddingBottom: "8px" }}>
        <b>{"08.22.2026"}</b>
      </div>
    </div>
  );
};
