import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchVocablaries } from "./api";

export const Component = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["vocablaries"],
    queryFn: fetchVocablaries,
  });

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Vocabulary List</h1>
      <ul>
        {data.map((item) => (
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
  return <div>Loading Vocablaries...</div>;
};

export const VocabularyList = {
  Component: Component,
  Error: ErrorBoundary,
  Loading: Loading,
};
