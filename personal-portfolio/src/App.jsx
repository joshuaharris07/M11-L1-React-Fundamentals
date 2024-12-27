import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Welcome to React with Bootstrap!</h1>
      <button className="btn btn-primary">Click Me</button>
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App
