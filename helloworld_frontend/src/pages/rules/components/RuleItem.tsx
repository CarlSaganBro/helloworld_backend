import type { RuleContent } from "../types/types.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import HighlightText from "./HighlightText.tsx";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import "./style/RuleItem.css";

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
    return <></>;
  }

  return (
    <div>
      <li>
        <div className="ruleItemContainer">
          <div>
            <HighlightText text={rule.content} query={query} />
          </div>

          {rule.reason && (
            <div
              className="ruleItemIconWrapper"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <FontAwesomeIcon icon={faQuestionCircle} size={"xl"} />

              {hovered && <div className="ruleItemTooltip">{rule.reason}</div>}
            </div>
          )}
        </div>
      </li>
    </div>
  );
}
