import "./style/CountdownNumber.css";

export const CountdownNumber = ({
  num,
  descriptor,
}: {
  num: number;
  descriptor?: string;
}) => {
  return (
    <div className="countdownContainer">
      <div className="countdownNumber">
        <b>{num.toString().padStart(2, "0")}</b>
      </div>
      {descriptor && <div className="countdownLabel">{descriptor}</div>}
    </div>
  );
};
