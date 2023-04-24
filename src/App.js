import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from "./components/Home.js";
import Chat from "./components/Chat.js";
import "./styles/App.css";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/">
          {user ? <Redirect to="/username" /> : <Login />}
        </Route>
        <Route exact path="/username">
          {user ? <Username user={user} /> : <Redirect to="/" />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
