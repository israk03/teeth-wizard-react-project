import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <h2>Main layout</h2>
      <Outlet></Outlet>
    </div>
  );
}
