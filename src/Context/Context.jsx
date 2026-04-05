import { createContext } from "react";
import generate from "../config/gemini";
import checkGemini from "../config/checkGemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    const text = await generate(prompt);
    console.log(text);
  };

  checkGemini();

  const contextValue = {
    sendPrompt: onSent,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;