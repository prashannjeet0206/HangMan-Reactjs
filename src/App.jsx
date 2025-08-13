import { Route, Routes } from "react-router";
import StartPage from "./Pages/StartPage";
import PlayPage from "./Pages/PlayPage";

function App() {
  return (
    <Routes>
      <Route path="/start" element={<StartPage />} />
      <Route path="/play" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
