import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfModal = ({ isOpen, onClose }) => {
  const [useIframeFallback, setUseIframeFallback] = useState(false);
  const pdfUrl = `${window.location.origin}/Lexi_Case_Reference.pdf`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
        >
          Close
        </button>
        <h2 className="text-lg font-semibold mb-4 text-gray-800">PDF Preview</h2>

        <div className="border border-gray-300 rounded">
          {!useIframeFallback ? (
            <Document
              file={pdfUrl}
              onLoadError={(error) => {
                console.error("react-pdf failed, switching to iframe", error);
                setUseIframeFallback(true);
              }}
            >
              <Page pageNumber={1} width={700} />
            </Document>
          ) : (
            <iframe
              src={pdfUrl}
              width="100%"
              height="600px"
              title="PDF Viewer"
              className="rounded"
            />
          )}
        </div>

        <p className="mt-4 text-sm text-yellow-800 bg-yellow-100 p-3 rounded leading-relaxed">
          (Simulated) Highlighted Paragraph 7: <br />
          “as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed...”
        </p>
      </div>
    </div>
  );
};

export default PdfModal;
