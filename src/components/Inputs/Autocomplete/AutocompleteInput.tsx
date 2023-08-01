import React, { ChangeEvent, useEffect, useState } from "react";
import HighlightedText from "../../DataDisplay/HighlightedText/HighlightedText";
import "./AutocompleteInput.css";

type Suggestion = {
  id: number;
  label: string;
};

interface AutocompleteInputProps {
  suggestions: Suggestion[];
  onSearch: (search: string) => void;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  suggestions,
  onSearch,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      onSearch(inputValue);
    }, 2000); // 2 seconds delay after typing to trigger the search function, in a real world scenario we can use some lodash debounce function

    return () => clearTimeout(delayTimer);
  }, [inputValue, onSearch]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value); // Update input value
  };

  const handleSelectSuggestion = (suggestion: Suggestion["id"]) => {
    const selectedSuggestion = suggestions.find((a) => a.id === suggestion);
    setInputValue(selectedSuggestion?.label || "");
    setFilteredSuggestions([]); // CLear suggestions after selection
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSelectSuggestion(suggestion.id)}
            >
              <HighlightedText
                text={suggestion.label}
                searchString={inputValue}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
