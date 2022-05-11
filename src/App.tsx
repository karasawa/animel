import "./App.css";
import Home from "./components/pages/Home";
import Introduction from "./components/pages/Introduction";
import Setting from "./components/pages/Setting";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
