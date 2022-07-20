import { Switch, Route, Redirect } from 'react-router-dom';

import QuoteDetail from './pages/QuoteDetail';
import AllQuotes from './pages/AllQuotes';
import AddQuoteForm from './pages/AddQuoteForm';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:q1">
          <QuoteDetail />
        </Route>
        <Route path="/add-quote">
          <AddQuoteForm />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
