import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../AuthConfig";

// function handleLogin(instance) {
//     instance.loginRedirect(loginRequest).catch(e => {
//         console.error(e);
//     });
// }

export const SignInButton = () => {
    // const { instance } = useMsal();

    return (
        // <button variant="secondary" onClick={() => handleLogin(instance)}>sign in</button>
        <button>Login</button>
    );
}