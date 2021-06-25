import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
// import { Provider } from 'react-redux';
// commment login page
import Provider from 'react-redux/es/components/Provider';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import store from '../src/components/store'
function App() {
  return (
<Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/page1" component={Page1} />
        <Route path="/page3" component={Page3} />
        <Route path="/page2" >
          <Page2 />
        </Route>
        <Redirect to={'/page3'} from="/" />
      </Switch>

    </BrowserRouter>

    </Provider>
  );
}

export default App;
