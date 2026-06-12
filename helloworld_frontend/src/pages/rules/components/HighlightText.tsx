import parse from "html-react-parser";
import "./style/HighlightText.css";

export default function HighlightText({
  text,
  query,
}: {
  text: string;
  query: string;
}) {
  if (!query) return <span>{parse(text)}</span>;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="highlightMark">
            {part}
          </mark>
        ) : (
          parse(part)
        ),
      )}
    </>
  );
}
