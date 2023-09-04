import { Outlet } from "react-router-dom";

function Event() {
  return (
    <div>
      <h3>오늘의이벤트</h3>
      <Outlet />
    </div>
  );
}

export default Event;