import { Switch, Route, Redirect } from 'react-router-dom';

import QuoteDetail from './pages/QuoteDetail';
import QuoteList from './pages/QuoteList';
import AddQuoteForm from './pages/AddQuoteForm';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
      <Redirect to="/quotes" />
      </Route>
      <Route path='/quotes' exact>
        <QuoteList />
      </Route>
      <Route path='/quotes/:q1'>
        <QuoteDetail />
      </Route>
      <Route path='/add-quote'>
        <AddQuoteForm />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
