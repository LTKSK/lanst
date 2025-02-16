import { createFileRoute } from "@tanstack/react-router";
import { VocabularyList } from "./-components/vocablary/VocabularyList";
import { VocabularyForm } from "./-components/vocablary/VocabularyForm";

export const Route = createFileRoute("/vocablary/")({
  component: Vocabulary,
  pendingComponent: VocabularyList.Loading,
  errorComponent: VocabularyList.Error,
});

function Vocabulary() {
  return (
    <div>
      <VocabularyList.Component />
      <VocabularyForm />
    </div>
  );
}
