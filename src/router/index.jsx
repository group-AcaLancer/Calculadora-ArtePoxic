import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import SelectResin from "../components/SelectResin/SelectResin";
import SelecionDeForma from "../components/selecionDeForma/SelecionDeForma";
import CircularCalculator from "../components/circularCalculator/CircularCalculator";
import RectangularCalculator from "../components/reactangularCalculator/RectangularCalculator";
import IrregularFilling from "../components/IrregularFilling/IrregularFilling";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/seleccion_resina",
    element: <SelectResin/>,
  },
  {
    path: "/seleccion_de_forma",
    element:<SelecionDeForma/>,
  },
  {
    path: "/calculo_circular",
    element:<CircularCalculator/> , 
   },
   {
    path: "/calculo_rectangular",
    element: <RectangularCalculator/>,
   },
   {
    path: "/calculo_irregular",
    element: <IrregularFilling/>,
   }

]);