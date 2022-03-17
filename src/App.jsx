
import { Outlet } from "react-router-dom";
import './App.css';

import Topbar from './components/layout/Topbar';

function App() {
  return (
    <div className="app">
      <Topbar />
      <Outlet />
      {/* TODO: make page footer */}
    </div>
  );
}

export default App;
