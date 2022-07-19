import { useParams } from "react-router-dom";

const QuoteDetail = () => {

  const params = useParams();

  return (
    <div>
      <p>£1 fish</p>
      <p>{params.q1}</p>
    </div>
  );
};

export default QuoteDetail;
