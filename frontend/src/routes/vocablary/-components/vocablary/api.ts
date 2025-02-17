export type Vocabulary = {
  id: number;
  word: string;
  definition: string;
};

const vocablaries: Vocabulary[] = [
  {
    id: 1,
    word: "bibliothek",
    definition: "library",
  },
  {
    id: 2,
    word: "sehr",
    definition: "very (adverb)",
  },
  {
    id: 3,
    word: "Sind sie",
    definition: "Are you",
  },
];

export function fetchVocablaries(): Promise<Vocabulary[]> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Failed to fetch vocablaries"));
        return;
      }
      resolve(vocablaries);
    }, 2000)
  );
}
