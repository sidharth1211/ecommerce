import Header from './components/Header'
import Footer from './components/Footer'
import { Row, Container, Card, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
function App() {
  return (
    <Router >
      <Header/>
      <Container>
      <main className="py-3">
      <Route path="/payment" component={PaymentScreen} exact/>
      <Route path="/placeorder" component={PlaceOrderScreen} exact/>
      <Route path="/login" component={LoginScreen} exact/>
      <Route path="/shipping" component={ShippingScreen} exact/>
      <Route path="/register" component={RegisterScreen} exact/>
      <Route path="/profile" component={ProfileScreen} exact/>
      <Route path="/" component={Homescreen} exact/>
      <Route path="/product/:id" component={ProductScreen} exact/>
      <Route path="/cart/:id?" component={CartScreen} exact/>
     
      </main>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
