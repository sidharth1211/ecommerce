import Header from './components/Header'
import Footer from './components/Footer'
import { Row, Container, Card, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router >
      <Header/>
      <Container>
      <main className="py-3">
      <Route path="/" component={Homescreen} exact/>
      <Route path="/product/:id" component={ProductScreen} exact/>
      </main>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
