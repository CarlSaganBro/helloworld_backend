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
      <div className={"countdownFlavor"}>{flavorText}</div>
      <div className="countdownRow">
        <CountdownNumber num={countdown.days} />
        <div className="countdownColon">:</div>
        <CountdownNumber num={countdown.hours} />
        <div className="countdownColon">:</div>
        <CountdownNumber num={countdown.minutes} />
        <div className="countdownColon">:</div>
        <CountdownNumber num={countdown.seconds} />
      </div>
    </div>
  );
};
