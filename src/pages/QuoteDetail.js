import { useParams } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuoteFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Nick', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Oli', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // if (!quote) {
  //   return <NoQuoteFound />;
  // }

  return (
    <div>
      <p>£1 fish</p>
      <p>{params.q1}</p>
    </div>
  );
};

export default QuoteDetail;
