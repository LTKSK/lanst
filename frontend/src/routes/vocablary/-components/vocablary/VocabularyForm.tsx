export const VocabularyForm = () => {
  return (
    <form className="grid grid-cols-1 gap-4 p-4 bg-white shadow-md rounded-md">
      <div className="flex flex-col">
        <label
          htmlFor="word"
          className="mb-2 text-sm font-medium text-gray-700"
        >
          Word
        </label>
        <input
          type="text"
          id="word"
          name="word"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="definition"
          className="mb-2 text-sm font-medium text-gray-700"
        >
          Definition
        </label>
        <textarea
          id="definition"
          name="definition"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};
