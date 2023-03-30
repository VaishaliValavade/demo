import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StartPage from "./pages/StartPage";

import logo from './logo.svg';
import './App.css';

function App() {
  // const navigate = useReactNavigate();

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start" element={<StartPage />} />
        </Routes>
        {/* <AppRoutes /> */}
        {/* <Link as="button" style={{ color : "white"}} to={"/start"}>Start</Link> */}

      {/* </header> */}
    </div>
  );
}

export default App;
