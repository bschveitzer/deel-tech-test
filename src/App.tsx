import React from "react";
import "./App.css";
import AutocompleteInput from "./components/Inputs/Autocomplete/AutocompleteInput";

function App() {
  return (
    <div className="App">
      <AutocompleteInput
        suggestions={[{ id: 1, label: "tei" }]}
        onSearch={() => {}}
        isLoading={true}
      />
    </div>
  );
}

export default App;
