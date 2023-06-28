import React, { createContext, useState } from 'react';

// Create the InquiriesContext
export const InquiriesContext = createContext();

// Create the InquiriesProvider component
export const InquiriesProvider = ({ children }) => {
  const [inquiries, setInquiries] = useState([]);
  const [userAdminInquiries, setUserAdminInquiries] = useState(null);
  
  // Function to add a new inquiry
  const addInquiry = (newInquiry) => {
    setInquiries([...inquiries, newInquiry]);
  };

  // Provide the context value
  const contextValue = {
    inquiries,
    addInquiry,
    setInquiries,
    userAdminInquiries,
    setUserAdminInquiries
  };

  return (
    <InquiriesContext.Provider value={contextValue}>
      {children}
    </InquiriesContext.Provider>
  );
};
