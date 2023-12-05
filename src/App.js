import logo from './logo.svg';
import './App.css';
import{ Button } from 'antd';

import ConvertorTemp from './components/ConvertorTemp';
import Dublare from './components/Dublare';
import Afisamprodusele from './components/Afisamprodusele';
import ProductList from './components/ProductList';
import ProductList2 from './components/ProductList2';

function App() {
  return (
    <div className="App">
      <h1>Proiect React 5</h1>
      
      <ConvertorTemp />

      <Dublare />

      <Afisamprodusele/>

      <ProductList/>

      <ProductList2/>
     
    </div>
  );
}

export default App;
