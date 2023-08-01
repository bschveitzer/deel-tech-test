import { Suggestion } from "../types/types";

export const mockData: Suggestion[] = [
  {
    id: 1,
    label: "First item",
  },
  {
    id: 2,
    label: "Second item",
  },
  {
    id: 3,
    label: "Third item",
  },
  {
    id: 4,
    label: "Forth item",
  },
  {
    id: 5,
    label: "Fifth item",
  },
  {
    id: 6,
    label: "Sixth item",
  },
  {
    id: 7,
    label: "Seventh item",
  },
  {
    id: 8,
    label: "Eighth item",
  },
  {
    id: 9,
    label: "Ninth item",
  },
  {
    id: 10,
    label: "Tenth item",
  },
];

export const getInitialSuggestions = (): Suggestion[] => mockData.slice(0, 5);
export const getFilteredSuggestions = (text: string) =>
  mockData.filter((suggestions) =>
    suggestions.label.toLowerCase().includes(text.toLowerCase())
  );
