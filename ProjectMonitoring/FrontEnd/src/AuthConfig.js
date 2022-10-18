// export const msalConfig = {
//   auth: {
//     clientId: "d05fd26d-82f0-4741-9fbd-8acbc65f18de",
//     //clientId: "88c407cc-3f69-4ee1-919c-77f76f86ffd3",
//     authority:
//     "https://cors-anywhere.herokuapp.com/https://login.microsoftonline.com/a56222e7-2ad0-4357-81fc-8485f79f59ec/oauth2/v2.0/token",
//       // "https://login.microsoftonline.com/a56222e7-2ad0-4357-81fc-8485f79f59ec",
//     redirectUri: "http://localhost:3000"
//   },
//   cache: {
//     cacheLocation: "sessionStorage", // This configures where your cache will be stored
//     storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
//   },
// };

// // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
// export const loginRequest = {
//   scopes: ["User.Read"],
// };

// // Add the endpoints here for Microsoft Graph API services you'd like to use.
// export const graphConfig = {
//   graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me",
// };

export const msalConfig = {
  auth: {
    clientId: "ca75cbb3-712e-4477-9390-a0e1c761df86",
    //clientId: "88c407cc-3f69-4ee1-919c-77f76f86ffd3",
    authority:
      "https://login.microsoftonline.com/a56222e7-2ad0-4357-81fc-8485f79f59ec",
      "redirectUri": "http://localhost:3000"
      // "redirectUri": "https://10.1.108.11:5000"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};
// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};
// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me",
};
// export const server = {
//   server: "https://drillsimulatordev.azurewebsites.net"
//   // server: "https://10.1.108.11:5000"
// }