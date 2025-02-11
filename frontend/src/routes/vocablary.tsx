import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vocablary")({
  component: Vocabulary,
});

function Vocabulary() {
  return <div>Hello "vocabulary"!</div>;
}
