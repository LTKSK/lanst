import type { Vocabulary } from "./api";

type Props = {
  vocablaries: Vocabulary[];
};

export const VocabularyList = ({ vocablaries }: Props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Vocabulary List</h1>
      <ul>
        {vocablaries.map((item) => (
          <li key={item.id}>{item.word}</li>
        ))}
      </ul>
    </div>
  );
};

export const ErrorBoundary = () => {
  return <div>Error</div>;
};
export const Loading = () => {
  return <div>Loading</div>;
};
