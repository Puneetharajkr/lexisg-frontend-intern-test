import React, { useState } from "react";

const InputPanel = ({ onSubmit, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (!query.trim()) return;
    onSubmit(query);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <textarea
        rows="4"
        className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        placeholder="Ask your legal question here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`mt-2 px-5 py-2 font-medium rounded shadow transition ${
          loading
            ? "bg-blue-400 text-white cursor-not-allowed opacity-70"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </div>
  );
};

export default InputPanel;
