import { createFileRoute } from "@tanstack/react-router";
import { VocabularyList } from "./-components/vocablary/VocabularyList";

export const Route = createFileRoute("/vocablary/")({
  component: Vocabulary,
  pendingComponent: VocabularyList.Loading,
  errorComponent: VocabularyList.Error,
});

function Vocabulary() {
  return <VocabularyList.Component />;
}
