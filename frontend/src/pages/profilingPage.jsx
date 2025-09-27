import React, { useState } from "react";

export default function ProfilingPage() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
        
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-800">
          Patient Survey File Upload
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Please upload your scanned forms or medical reports (PDF, JPG, PNG).  
        </p>

        {/* Upload Card */}
        <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 bg-blue-50 hover:bg-blue-100 transition cursor-pointer">
          <label className="flex flex-col items-center space-y-3 cursor-pointer">
            <svg
              className="w-12 h-12 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6H16a5 5 0 010 10h-1m-4 4v-8m0 0L9 12m3-2l3 2"
              />
            </svg>
            <span className="text-blue-700 font-medium">
              Click to select files
            </span>
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Uploaded Files{" "}
              <span className="text-blue-600">({files.length})</span>:
            </h3>
            <ul className="space-y-3">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div>
                    <span className="font-medium text-gray-800">{file.name}</span>
                    <p className="text-sm text-gray-500">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {file.type.split("/")[1]?.toUpperCase() || "FILE"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
