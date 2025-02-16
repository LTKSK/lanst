export type Vocabulary = {
  word: string;
  definition: string;
};

export function fetchVocablaries() {
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Failed to fetch vocablaries"));
        return;
      }
      const vocablary1: Vocabulary = {
        word: "vocabulary",
        definition: "the body of words used in a particular language.",
      };
      const vocablary2: Vocabulary = {
        word: "sehr",
        definition: "very (adverb)",
      };
      resolve([vocablary1, vocablary2]);
    }, 2000)
  );
}
