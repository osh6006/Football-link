import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/navbar/sidebar";
import RootContainer from "./containers/root-container";

function App() {
  return (
    <RootContainer>
      {/*  Side Bar */}
      <Sidebar />
      {/* Nav & Page*/}
      <div className="h-full w-full">
        <Navbar />
        <Outlet />
      </div>
    </RootContainer>
  );
}

export default App;
