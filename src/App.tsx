import React, { createContext } from "react";
import "./App.css";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Counter } from "./components/counter";

export const GlobalContext = createContext("");

function App() {
  return (
    <div className="App">
      <GlobalContext.Provider value="Zaman">
        <Header />
        <About />
        <Counter />
        <Footer />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
