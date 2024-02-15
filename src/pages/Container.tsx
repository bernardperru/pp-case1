import { Outlet } from "react-router-dom";

export function Container() {
  return (
    <div className="pl-60 min-h-[465px]">
      <Outlet></Outlet>
    </div>
  );
}
