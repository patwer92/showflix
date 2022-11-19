import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Components
import Header from "./components/Header";

// Pages
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import SinglePage from "./pages/Singlepage";

const App = () => {
  return (
    <Router>
      <Header />
      <Container fluid>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/singleshow/:id" component={SinglePage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
