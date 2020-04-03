import React from "react";

// COntext Providers
//
import CategoryProvider from "./context/CategoryContext";
import RecepyProvider from "./context/RecepyContext";

// Components

import Header from "./components/Header";
import Form from "./components/Form";
import RecepyList from "./components/RecepyList";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoryProvider>
      <Header />
      <RecepyProvider>
        <ModalProvider>
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
          </div>
          <div className="container">
            <RecepyList />
          </div>
        </ModalProvider>
      </RecepyProvider>
    </CategoryProvider>
  );
}

export default App;
