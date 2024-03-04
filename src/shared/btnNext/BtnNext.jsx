import { useNavigate } from "react-router-dom";
import "./BtnNext.css";
import useSelectedType from "../../stores/selectedType.store";

const BtnNext = ({ url, setOnAlert }) => {
  const option = useSelectedType((state) => state.selectedType);

  const navigate = useNavigate();

  const handleNext = () => {
    if (option) {
      setOnAlert(false)
      navigate(`${url}`)
    }else{
      setOnAlert(true)
    }
  };

  return (
    <div className="btnNext">
      <button className="btnNext__btn" onClick={handleNext}>
        Siguiente
      </button>
    </div>
  );
};

export default BtnNext;
