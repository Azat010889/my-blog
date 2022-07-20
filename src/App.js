import React from "react";
import './App.css';
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import State from "./components/State";

function App() {
  return (
    <div className="w3-content" style={{maxWidth:"1400px"}}>
        <Header/>
        <div className="w3-row">
            <BlogEntries/>
            <State/>
        </div>
    </div>
  );
}

export default App;
