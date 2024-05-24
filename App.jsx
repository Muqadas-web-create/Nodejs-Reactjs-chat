// import { useState } from "react";

// import "./App.css";

// import AuthPage from "./AuthPage";
// import ChatsPage from "./ChatsPage";

// function App() {
//   const [user, setUser] = useState(undefined);

//   if (!user) {
//     return <AuthPage onAuth={(user) => setUser(user)} />;
//   } else {
//     return <ChatsPage user={user} />;
//   }
// }

// export default App;
// App.jsx
// import React, { useState } from "react";
// import "./App.css";
// import AuthPage from "./AuthPage.js";
// import ChatsPage from "./ChatsPage.jsx";  // Ensure the filename and path are correct

// function App() {
//   const [user, setUser] = useState(undefined);

//   if (!user) {
//     return <AuthPage onAuth={(user) => setUser(user)} />;
//   } else {
//     return <ChatsPage user={user} />;  // Corrected from ChatPage to ChatsPage
//   }
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage.jsx";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
