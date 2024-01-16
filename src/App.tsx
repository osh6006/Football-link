import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import RootContainer from "./containers/root-container";
import LeftSidebar from "./components/navbar/left-sidebar";

function App() {
  return (
    <RootContainer>
      {/* Left Side Bar */}
      <LeftSidebar />
      {/* Nav & Page*/}
      <section className="h-full flex-1 ">
        <Navbar />
        <Outlet />
      </section>
    </RootContainer>
  );
}

export default App;
