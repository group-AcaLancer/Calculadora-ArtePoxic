import "./CalculatorResult.css";

const CalculatorResult = ({id, catalyst = 0, resin = 0 }) => {
  const resultCatalyst = () => {
    if (catalyst >= 1000) {
      return (catalyst / 1000).toFixed(2);
    }
    return catalyst;
  };

  const resultResin = () => {
    if (resin >= 1000) {
      return (resin / 1000).toFixed(2);
    }
    return resin;
  };

  return (
    <div className="calculatorResult" id={id}>
      <h3 className="calculatorResult__title">Resultado </h3>
      <span className="calculatorResult__output">
        Catalizador {catalyst >= 1000 ? "(kg.)" : "(gr.)"}
        <strong>{resultCatalyst()}</strong>
      </span>
      <span className="calculatorResult__output">
        Resina {resin >= 1000 ? "(kg.)" : "(gr.)"}
        <strong>{resultResin()}</strong>
      </span>
    </div>
  );
};

export default CalculatorResult;
