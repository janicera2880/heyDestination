import React, { createContext, useState } from 'react';

// Create the InquiriesContext
export const InquiriesContext = createContext();

// Create the InquiriesProvider component
export const InquiriesProvider = ({ children }) => {
  const [inquiries, setInquiries] = useState([]);

  // Function to add a new inquiry
  const addInquiry = (newInquiry) => {
    setInquiries([...inquiries, newInquiry]);
  };

  // Provide the context value
  const contextValue = {
    inquiries,
    addInquiry
  };

  return (
    <InquiriesContext.Provider value={contextValue}>
      {children}
    </InquiriesContext.Provider>
  );
};
