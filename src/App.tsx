import React, { useState } from "react";
import PostList from "./posts";
import ApiCallContextProvider from "./utility/apiCallsContext";
import "./style.css"

const App: React.FC = () => {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <ApiCallContextProvider>
      <button
        onClick={() => {
          setShowPosts(!showPosts);
        }}
      >
        {showPosts ? "Hide" : "Show"}
      </button>
      {showPosts ? <PostList />:null }
    </ApiCallContextProvider>
  );
};

export default App;
