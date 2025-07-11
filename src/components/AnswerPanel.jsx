import React, { useState } from "react";
import PdfModal from "./PdfModal";

const AnswerPanel = ({ response, loading, query }) => {
  const [showPdf, setShowPdf] = useState(false);

  if (!loading && !response) return null;

  return (
    <div className="w-full max-w-2xl bg-purple-300 shadow-md rounded p-6 mt-6 border border-black">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
          <p className="text-blue-600 text-sm italic">
            Generating answer for: "{query}"
          </p>
        </div>
      ) : (
        <>
          <p className="text-gray-800 mb-4 leading-relaxed text-justify">
            {response.answer}
          </p>

          {response.citations.map((cite, idx) => (
            <div key={idx} className="mt-4 border-t pt-2">
              <p className="text-sm italic mb-1 text-red-800">Citation:</p>
              <p className="text-sm text-gray-700">{cite.text}</p>

              <button
                onClick={() => setShowPdf(true)}
                className="text-blue-600 hover:text-blue-800 underline mt-1 inline-block focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              >
                View Source: {cite.source}
              </button>

              <PdfModal isOpen={showPdf} onClose={() => setShowPdf(false)} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default AnswerPanel;
