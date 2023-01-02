import { Navigate, Route, Routes } from "react-router-dom";

import Counter from "./pages/Counter";
import TodoList from "./pages/TodoList";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="counter" />} />
        <Route path="/counter" element={<><Counter /><TodoList /></>} />
      </Routes>
    </div>
  );
};

export default App;
