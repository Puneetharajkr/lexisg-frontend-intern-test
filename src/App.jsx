import React, { useState } from "react";
import InputPanel from "./components/InputPanel";
import AnswerPanel from "./components/AnswerPanel";

function App() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [queryText, setQueryText] = useState(""); 

  const handleQuerySubmit = (query) => {
    setLoading(true);
    setResponse(null); 
    setQueryText(query);

    setTimeout(() => {
      const simulatedResponse = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text:
              "“as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)",
            source: "Lexi_Case_Reference.pdf",
            link: `${window.location.origin}/Lexi_Case_Reference.pdf`,
          },
        ],
      };

      setResponse(simulatedResponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center p-4">
      <h2 className="text-3xl font-bold text-red-500 bold mb-6 text-center">
        Lexi Legal Assistant
      </h2>

      <InputPanel onSubmit={handleQuerySubmit} />
      <AnswerPanel response={response} loading={loading} query={queryText} />
    </div>
  );
}

export default App;
