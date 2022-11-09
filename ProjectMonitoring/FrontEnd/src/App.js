import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import Login from './pages/login.tsx';
import Main from './pages/main.jsx';




function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>

    // <Router>
    //     <Routes>
    //       <Route path="/Home" element={<AppT />} />
    //       <Route path="/" element={<SignInButton />} />
    //     </Routes>
    // </Router>
  );
}

export default App;
