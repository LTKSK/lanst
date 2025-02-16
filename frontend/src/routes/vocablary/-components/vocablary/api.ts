export type Vocabulary = {
  id: number;
  word: string;
  definition: string;
};

export function fetchVocablaries(): Promise<Vocabulary[]> {
  console.log("fetchVocablaries");
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Failed to fetch vocablaries"));
        return;
      }
      const vocablary1: Vocabulary = {
        id: 1,
        word: "vocabulary",
        definition: "the body of words used in a particular language.",
      };
      const vocablary2: Vocabulary = {
        id: 2,
        word: "sehr",
        definition: "very (adverb)",
      };
      resolve([vocablary1, vocablary2]);
    }, 2000)
  );
}
