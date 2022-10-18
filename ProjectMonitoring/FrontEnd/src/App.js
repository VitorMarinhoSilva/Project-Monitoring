import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppT from "./appTest";
import { SignInButton } from "./Components/SignInButton";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

function App() {

  return (
    <BrowserRouter>
      <UnauthenticatedTemplate>
        <Routes>
          <Route path="/" element={<SignInButton />}/>
        </Routes>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Routes>
          <Route>
            <Route path="/" element={<AppT/>} />
          </Route>
        </Routes>
      </AuthenticatedTemplate>
    </BrowserRouter>

    // <Router>
    //     <Routes>
    //       <Route path="/Home" element={<AppT />} />
    //       <Route path="/" element={<SignInButton />} />
    //     </Routes>
    // </Router>
  );
}

export default App;
