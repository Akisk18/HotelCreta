"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function TextExpander({ children }) {
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const displayText = isTextExpanded
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "...";
  return (
    <span>
      {displayText}
      <button
        className="text-[#34495e] font-bold"
        onClick={() => setIsTextExpanded(!isTextExpanded)}
      >
        {isTextExpanded ? (
          <div className="flex flex-row items-center">
            Show less <ChevronUpIcon className="w-5 h-5" />
          </div>
        ) : (
          <div className="flex flex-row items-center">
            Show more
            <ChevronDownIcon className="w-5 h-5" />
          </div>
        )}
      </button>
    </span>
  );
}

export default TextExpander;
