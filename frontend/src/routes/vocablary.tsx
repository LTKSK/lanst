import { createFileRoute } from "@tanstack/react-router";

type Vocabulary = {
  word: string;
  definition: string;
};

export const Route = createFileRoute("/vocablary")({
  component: Vocabulary,
  loader: () =>
    new Promise((resolve) =>
      setTimeout(() => {
        const vocablary: Vocabulary = {
          word: "vocabulary",
          definition: "the body of words used in a particular language.",
        };
        resolve(vocablary);
      }, 1000)
    ),
});

function Vocabulary(vocablary: Vocabulary) {
  console.log("vocablary", vocablary);
  return <div>Hello "vocabulary"!</div>;
}
