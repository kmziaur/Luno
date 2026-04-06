import { createContext, useState } from "react";
import generate from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const newChat= ()=>{
    setLoading(false)
    setShowResult(false)
  }

  const onSent = async (prompt) => {
    setResultData("")
    setLoading(true)
    setShowResult(true)
    let response;
    if(prompt!== undefined){
      response = await generate(prompt)
      setRecentPrompt(prompt)
    }
    else{
      setPrevPrompts(prev => [...prev, input])
      setRecentPrompt(input)
      response = await generate(input)
    }
    // setRecentPrompt(input)
    // setPrevPrompts(prev => [...prev, input])
    // const response = await generate(input)
    setResultData(response)
    setLoading(false)
    setInput("")

  };
  console.log("Context Loaded");

  const contextValue = {
    onSent,
    prevPrompts,
    setPrevPrompts,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
