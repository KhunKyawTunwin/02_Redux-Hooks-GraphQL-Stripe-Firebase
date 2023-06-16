import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
