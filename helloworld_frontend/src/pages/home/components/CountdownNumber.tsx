export const CountdownNumber = ({
  num,
  descriptor,
}: {
  num: number;
  descriptor: string;
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ fontSize: "64px", height: "48px" }}>
        <b>{num.toString().padStart(2, "0")}</b>
      </div>
      <div style={{ fontSize: "12px", textTransform: "uppercase" }}>
        {descriptor}
      </div>
    </div>
  );
};
