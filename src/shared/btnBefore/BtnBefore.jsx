import { useNavigate } from "react-router-dom";
import "./BtnBefore.css";

const BtnBefore = ({ url }) => {
  const navigate = useNavigate();
  return (
    <i
      className="bx bxs-left-arrow bx-md btnBefore"
      onClick={() => navigate(`${url}`)}
    ></i>
  );
};

export default BtnBefore;
