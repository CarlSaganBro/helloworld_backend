export default function HighlightText({
  text,
  query,
}: {
  text: string;
  query: string;
}) {
  if (!query) return <span>{text}</span>;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark
            key={i}
            style={{
              background: "#f06414",
              color: "white",
              padding: "0 2px",
            }}
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </span>
  );
}
