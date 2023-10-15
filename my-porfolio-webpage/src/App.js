import './CSS/App.css';
import FrontBack from './Components/FrontBack';
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FrontBack></FrontBack>
      <div style={{height: '1500px'}}></div>
    </div>
  );
}

export default App;
