import React from "react";
import "./HighlightedText.css";

interface HighlightedTextProps {
  text: string;
  searchString: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  text,
  searchString,
}) => {
  return (
    <>
      {text.toLowerCase().includes(searchString.toLowerCase()) ? (
        <>
          {text.substring(
            0,
            text.toLowerCase().indexOf(searchString.toLowerCase())
          )}
          <span className="highlight">{searchString}</span>
          {text.substring(
            text.toLowerCase().indexOf(searchString.toLowerCase()) +
              searchString.length
          )}
        </>
      ) : (
        text
      )}
    </>
  );
};

export default HighlightedText;
