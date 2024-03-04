import { useNavigate } from "react-router-dom";
import "./BtnNext.css";

const BtnNext = ({ url }) => {
  const navigate = useNavigate();

  const handleNext = () => {};

  return (
    <div className="btnNext">
      <button className="btnNext__btn" onClick={() => navigate(`${url}`)}>
        Siguiente
      </button>
    </div>
  );
};

export default BtnNext;
