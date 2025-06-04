
import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import './App.css'
import { useRoutes } from 'react-router-dom';
import Routes from '../Router/Routes';
import NavigationMenu from './Components/Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import Intro from './Components/Intro/Intro';
 import { Suspense } from 'react';

function App() {

  const location = useLocation()
  const routes = useRoutes(Routes)
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {


    // fetch('https://homi-node.liara.run/api/products').then(res => {
    //   if (res.ok) {
    //     console.log(res);
    //     return res.json()
    //   } else {
    //     setError(res)
    //   }
    // }).then(res2 => {
    //   setProducts(res2.data.products)
    //   console.log(res2);
    // })
  }, [])
  return (

    <div className="App w-full h-full overflow-hidden   ">
      {location.pathname != '/login' && location.pathname != '/login' && <NavigationMenu></NavigationMenu>}

      {routes}
      {/* <header className="App-header">
        <h1>Product Store</h1>
      </header>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="product-list">
        {products.length ? products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.picture} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        )) : <></>}
      </div> */}

      {location.pathname != '/login' && location.pathname != '/login' && <div className="empty-space w-full h-[80px] lg:hidden "></div>}
    </div>

  );
}

export default App;
