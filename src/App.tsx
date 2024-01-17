import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import RootContainer from "./containers/root-container";
import Sidebar from "./components/navbar/sidebar";

function App() {
  return (
    <RootContainer>
      {/*  Side Bar */}
      <Sidebar />
      {/* Nav & Page*/}
      <section className="h-full flex-1 ">
        <Navbar />
        <Outlet />
      </section>
    </RootContainer>
  );
}

export default App;
