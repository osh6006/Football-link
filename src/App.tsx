import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* Nav */}
      <div>Nav</div>
      {/* Pages */}
      <div>App</div>
      <Outlet />
    </>
  );
}

export default App;
