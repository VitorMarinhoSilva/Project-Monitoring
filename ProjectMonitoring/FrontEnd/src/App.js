import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import Login from './pages/login.tsx';
import Main from './pages/main.jsx';




function App() {

  return (
    <BrowserRouter>
      <UnauthenticatedTemplate>
        <Routes>
          <Route path="/" element={<Login />}/>
        </Routes>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Routes>
          <Route>
            <Route path="/" element={<Main/>} />
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
