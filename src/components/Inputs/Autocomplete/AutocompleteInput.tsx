import React, { ChangeEvent, useEffect, useState } from "react";
import { Suggestion } from "../../../types/types";
import HighlightedText from "../../DataDisplay/HighlightedText/HighlightedText";
import Loading from "../../Feedback/Loading/Loading";
import "./AutocompleteInput.css";
interface AutocompleteInputProps {
  suggestions: Suggestion[];
  onSearch: (search: string) => void;
  isLoading?: boolean;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  suggestions,
  onSearch,
  isLoading,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      onSearch(inputValue);
    }, 1000); // 2 seconds delay after typing to trigger the search function, in a real world scenario we can use some lodash debounce function

    return () => clearTimeout(delayTimer);
  }, [inputValue, onSearch]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value); // Update input value
  };

  const handleSelectSuggestion = (suggestion: Suggestion["id"]) => {
    const selectedSuggestion = suggestions.find((a) => a.id === suggestion);
    setInputValue(selectedSuggestion?.label || "");
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete-container">
      <input
        className="input-border"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
        onClick={() => setShowSuggestions(true)}
      />
      {showSuggestions && (
        <ul className="suggestions-list">
          {isLoading ? (
            <Loading />
          ) : (
            suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectSuggestion(suggestion.id)}
              >
                <HighlightedText
                  text={suggestion.label}
                  searchString={inputValue}
                />
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
