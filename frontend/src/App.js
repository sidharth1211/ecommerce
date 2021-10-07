import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div >
      <Header/>
      <Container>
      <main className="py-3">
        <h1>Welcome to proshop!</h1>
      </main>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
