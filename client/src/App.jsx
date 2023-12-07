import React, { useState, useEffect} from 'react'
import { useRoutes } from 'react-router-dom'
import { supabase } from './Client.jsx'
import { Link } from 'react-router-dom'
import Layout from './routes/Layout.jsx'
import LoginPage from './pages/login/LoginPage.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import ReadSellingProducts from './pages/Read/ReadSellingProducts.jsx'
import ReadAllProducts from './pages/Read/ReadAllProducts.jsx'
import ViewProduct from './pages/Read/ViewProduct.jsx'
import EditListing from './pages/update/EditListing.jsx'
import CreateLisiting from './pages/create/CreateLisiting.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
const App = () => {
  const API_URL = 'http://localhost:3001'
  const [session, setSession] = useState(null)
  const [sellingProducts, setSellingProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  
  useEffect(() => {
    const fetchSellingProducts = async () => {
    const res = await fetch(`${API_URL}/api/products`)
    const data = await res.json()
    setSellingProducts(data)
    }
    fetchSellingProducts()
}
, [API_URL])

  useEffect(() => {
    const fetchAllProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setAllProducts(data)
    }
    fetchAllProducts()
}
, [])


  

  useEffect(() => {
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    
  }, [])

  let element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage sellingProducts={sellingProducts} allProducts={allProducts}/>},
        { path: '/sellingProducts', element: <ReadSellingProducts data={sellingProducts}/>},
        { path: '/allProducts', element: <ReadAllProducts data={allProducts}/>},
        { path: '/login', element: <LoginPage />},
        { path: '/create', element: <CreateLisiting api_url={API_URL}/>},
        { path: '/edit/:id', element: <EditListing />},
        { path: '/products/:id', element: <ViewProduct/>}, 
        { path: '*', element: <ErrorPage /> }    
      ]
    }
  ])

  return (

    <div className='App'>
        {element}
    </div>
   
  )
}

export default App
