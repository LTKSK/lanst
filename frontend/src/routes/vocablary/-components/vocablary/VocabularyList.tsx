const mockVocabulary = [
  { id: 1, word: "Word 1" },
  { id: 2, word: "Word 2" },
  { id: 3, word: "Word 3" },
];

export const VocabularyList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Vocabulary List</h1>
      <ul>
        {mockVocabulary.map((item) => (
          <li key={item.id}>{item.word}</li>
        ))}
      </ul>
    </div>
  );
};
