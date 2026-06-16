import "../style/Home.css";
import { TrapeziumCutout1 } from "../../../assets/TrapeziumCutout1.tsx";

export const HomePage = ({}) => {
  return (
    <div className={"homeContainer"}>
      <div className={"splashPanel"}>
        <div className={"splashLeft"}>
          <div className={"splashText"}>
            <div className={"splashQuip"}>
              The world could always use more heroes.
            </div>
            <div className={"splashLogo"}>LOGO HERE | ELITE CHAMPIONS</div>
            <div className={"splashSignup"}>
              <span>Battle for the title of Olderwatch Elite Champion!</span>
              <button>SIGN UP NOW</button>
            </div>
          </div>
        </div>
        <div className={"splashRight"}></div>
      </div>
      <div className={"splashCutout"}>
        <TrapeziumCutout1 color={"#F6E7D4"} />
      </div>
      <div className={"datesPanel"}>
        <div className={"datePanel"}>
          <div className={"dateContent"}>
            <span className={"dateTitle"}>Signups Close</span>
            <div className={"dateInfo"}>
              <span className={"dateDate"}>July 12 2026</span>
              <span className={"dateTime"}>12:00PM EST</span>
            </div>
          </div>
        </div>
        <div className={"datePanel"}>
          <div className={"dateContent"}>
            <span className={"dateTitle"}>Vote for Captains</span>
            <div className={"dateInfo"}>
              <span className={"dateDate"}>July 17 2026</span>
              <span className={"dateTime"}>03:00PM EST</span>
            </div>
          </div>
        </div>
        <div className={"datePanel"}>
          <div className={"dateContent"}>
            <span className={"dateTitle"}>Submit Team Logos</span>
            <div className={"dateInfo"}>
              <span className={"dateDate"}>July 31 2026</span>
              <span className={"dateTime"}>12:00PM EST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
