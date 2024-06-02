import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>{user && user.admin ? <Outlet /> : <Navigate to={"/"} replace />}</>
  );
};

export default AdminRoute;
