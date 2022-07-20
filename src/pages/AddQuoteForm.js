import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const AddQuoteForm = () => {
  const history = useHistory();
  // history because it allows us to change browser history
  // history object, can trigger history changing actions
  // push or replace
  // push can go back
  // replace can't

  const addQuoteHandler = (quote) => {
    console.log(quote);
    history.push('/quotes');
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddQuoteForm;
