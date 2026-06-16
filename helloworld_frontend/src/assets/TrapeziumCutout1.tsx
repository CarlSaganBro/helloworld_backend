export const TrapeziumCutout1 = ({ color }: { color?: string }) => (
  <svg
    width="100%"
    viewBox="0 0 2000 80"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,0 L100,0 L150,50 L400,50 L450,0 L2000,0 L2000,200 L0,200 Z"
      fill={color}
    />
  </svg>
);
