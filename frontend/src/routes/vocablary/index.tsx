import { createFileRoute } from "@tanstack/react-router";
import { VocabularyList } from "./-components/vocablary/VocabularyList";

const mockVocabulary = [
  { id: 1, word: "Word 1", definition: "aaa" },
  { id: 2, word: "Word 2", definition: "aaa" },
  { id: 3, word: "Word 3", definition: "aaa" },
];

export const Route = createFileRoute("/vocablary/")({
  component: Vocabulary,
});

function Vocabulary() {
  return <VocabularyList vocablaries={mockVocabulary} />;
}
