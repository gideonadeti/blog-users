import { Outlet } from "react-router-dom";

import Header from "./components/Header";

export default function App() {
  return (
    <div
      className="d-flex flex-column overflow-hidden"
      style={{ height: "100vh" }}
    >
      <Header />
      <Outlet />
    </div>
  );
}
