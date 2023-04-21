import Navbar from "./components/Navbar.js";

const MainUI = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default MainUI;