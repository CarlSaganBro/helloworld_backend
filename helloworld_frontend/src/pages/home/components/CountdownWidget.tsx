import type { Countdown } from "../hooks/useCountdown.tsx";
import { CountdownNumber } from "./CountdownNumber.tsx";
import "./style/CountdownWidget.css";

export const CountdownWidget = ({
  countdown,
  flavorText,
}: {
  countdown: Countdown;
  flavorText?: string;
}) => {
  return (
    <div className="countdownWidget">
      {flavorText}

      <div className="countdownRow">
        <CountdownNumber num={countdown.days} descriptor={"Days"} />
        <div className="countdownColon">:</div>

        <CountdownNumber num={countdown.hours} descriptor={"Hours"} />
        <div className="countdownColon">:</div>

        <CountdownNumber num={countdown.minutes} descriptor={"Minutes"} />
        <div className="countdownColon">:</div>

        <CountdownNumber num={countdown.seconds} descriptor={"Seconds"} />
      </div>

      <div className="countdownDate">
        <b>{"08.22.2026"}</b>
      </div>
    </div>
  );
};
