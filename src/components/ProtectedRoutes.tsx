import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = observer(() => {
  const {
    root: { auth },
  } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [auth.isAuthenticated]);

  if (loading) {
    return null;
  }

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
});

export default ProtectedRoutes;
