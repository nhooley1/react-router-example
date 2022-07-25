import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };
  const history = useHistory();

  // allows us to get the query param data
  const location = useLocation();

  const queryparams = new URLSearchParams(location.search);

  const isSortingAscending = queryparams.get('sort') === 'asc';

  const sortedList = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    // basically changing the url to add query params
    // push causes a rerender
    history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
    console.log(location);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending '}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedList.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
