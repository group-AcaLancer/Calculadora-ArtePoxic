import { Navigate } from "react-router-dom";
import useSelectedType from "../stores/selectedType.store";

const ProtectedRoute = ({ children }) => {
  const option = useSelectedType((state) => state.selectedType);

  return <>{option ? children : <Navigate to="/seleccion_resina" />}</>;
};

export default ProtectedRoute;
