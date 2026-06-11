import { useCountdown } from "../hooks/useCountdown.tsx";
import { CountdownWidget } from "./CountdownWidget.tsx";

export const HomePage = ({}) => {
  const signupsCountdown = useCountdown("2026-07-14T23:59:59");
  const tournamentCountdown = useCountdown("2026-08-22T23:59:59");
  return (
    <div>
      {!signupsCountdown.isExpired && (
        <CountdownWidget
          countdown={signupsCountdown}
          flavorText={"Signups close in"}
        />
      )}
      <br />
      <br />
      {signupsCountdown.isExpired && (
        <CountdownWidget
          countdown={tournamentCountdown}
          flavorText={"Tournament starts in"}
        />
      )}
    </div>
  );
};
