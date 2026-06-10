import type { RuleContent } from "../types/types.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import HighlightText from "./HighlightText.tsx";

export function ExpandableItem({
  rule,
  query,
}: {
  rule: RuleContent;
  query: string;
}) {
  const [open, setOpen] = useState(false);
  const regex = new RegExp(`(${query})`, "gi");
  const parts = rule.content.match(regex);

  if (parts == null) {
    // do not render result if it does not exist
    return <></>;
  }

  return (
    <div onClick={() => setOpen(!open)}>
      <li>
        <HighlightText text={rule.content} query={query} />
        {rule.reason && (
          <span>
            {open ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </span>
        )}
        {open && rule.reason && (
          <span>
            <i>Reason: {rule.reason}</i>
          </span>
        )}
      </li>
    </div>
  );
}
