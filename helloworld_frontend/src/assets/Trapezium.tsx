export const Trapezium = ({ color }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg">
    <polygon
      points="
      25,00
      275,00
      225,100
      75,100
    "
      fill={color}
      stroke={color}
      strokeWidth="0"
    />
  </svg>
);
