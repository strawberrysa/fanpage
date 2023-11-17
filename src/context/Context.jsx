import React, { useState } from "react";
import { createContext } from "react";

export const MessageContextData = createContext();

function Context({ children }) {
  const [message, setMessage] = useState([]);
  return (
    <MessageContextData.Provider value={{ message, setMessage }}>
      {children}
    </MessageContextData.Provider>
  );
}

export default Context;
