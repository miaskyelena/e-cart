import React, { useState, useEffect } from 'react'; 
import { useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from './routes/Layout';
import HomePage from './pages/Home/HomePage';
import ReadProducts from './pages/Read/ReadProducts';
import CreateProduct from './pages/Create/CreateProduct';
import ProductDetails from './pages/View/ProductDetails';
import EditProduct from './pages/Update/EditProduct';
import About from './pages/About/About';
const App = () => {

  const [products, setProducts] = useState([]);
  const [session, setSession] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  console.log(products)


  let element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage data={products} /> },
        { path: '/products', element: <ReadProducts data={products} /> },
        { path: '/products/:id', element: <ProductDetails /> },
        { path: '/create', element: <CreateProduct /> },
        { path: '/edit/:id', element: <EditProduct /> },
        { path: '/about', element: <About /> },
      ]
    }
  ]);

  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;