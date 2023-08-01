import React, { useCallback, useEffect } from "react";
import "./App.css";
import AutocompleteInput from "./components/Inputs/Autocomplete/AutocompleteInput";
import { getFilteredSuggestions, getInitialSuggestions } from "./services/api";
import { Suggestion } from "./types/types";

function App() {
  const [searchItems, setSearchItems] = React.useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    const response = getInitialSuggestions();
    setSearchItems(response);
  }, [setSearchItems]);

  const onSearch = useCallback((searchString: string) => {
    setIsLoading(true);

    // Simulate API call for suggestions
    // Replace this with real world scenario useQuery hook, Apollo, axios call, etc.
    setTimeout(() => {
      const response = getFilteredSuggestions(searchString);
      setSearchItems(response);
      setIsLoading(false);
    }, 2000); // Simulating API response time
  }, []);
  return (
    <div className="App">
      <AutocompleteInput
        suggestions={searchItems}
        onSearch={onSearch}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
