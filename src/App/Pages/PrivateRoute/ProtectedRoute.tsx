import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../Redux/store";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.userAuth);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
export default ProtectedRoute;
