import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import SelectResin from "../components/SelectResin/SelectResin";
import CircularCalculator from "../components/circularCalculator/CircularCalculator";
import RectangularCalculator from "../components/reactangularCalculator/RectangularCalculator";
import IrregularFilling from "../components/IrregularFilling/IrregularFilling";
import ShapeSelection from "../components/shapeSelection/ShapeSelection";
import ErrorPage from "./ErrorPage";
import ProtectedRoute from "./ProtecterRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/seleccion_resina",
    element: <SelectResin />,
  },
  {
    path: "/seleccion_de_forma",
    element: (
      <ProtectedRoute>
        <ShapeSelection />
      </ProtectedRoute>
    ),
  },
  {
    path: "/calculo_circular",
    element: (
      <ProtectedRoute>
        <CircularCalculator />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/calculo_rectangular",
    element: (
      <ProtectedRoute>
        <RectangularCalculator />
      </ProtectedRoute>
    ),
  },
  {
    path: "/calculo_irregular",
    element: (
      <ProtectedRoute>
        <IrregularFilling />
      </ProtectedRoute>
    ),
  },
]);
