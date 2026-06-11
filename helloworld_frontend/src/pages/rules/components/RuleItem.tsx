import type { RuleContent } from "../types/types.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import HighlightText from "./HighlightText.tsx";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

export function RuleItem({
  rule,
  query,
}: {
  rule: RuleContent;
  query: string;
}) {
  const [hovered, setHovered] = useState(false);
  const regex = new RegExp(`(${query})`, "gi");
  const parts = rule.content.match(regex);

  if (parts == null) {
    // do not render result if it does not exist
    return <></>;
  }

  return (
    <div>
      <li>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "100px",
          }}
        >
          <HighlightText text={rule.content} query={query} />
          {rule.reason && (
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <FontAwesomeIcon icon={faQuestionCircle} size={"xl"} />
              {hovered && (
                <div
                  style={{
                    position: "absolute",
                    background: "#222",
                    color: "#fff",
                    transform: "translateX(-500px)",
                    width: "500px",
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                >
                  {rule.reason}
                </div>
              )}
            </div>
          )}
        </div>
      </li>
    </div>
  );
}
