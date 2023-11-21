import React, { useState, useEffect} from 'react'
import { useRoutes } from 'react-router-dom'
import { supabase } from './Client.jsx'
import Layout from './routes/Layout.jsx'
import LoginPage from './pages/login/LoginPage.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import ViewListing from './pages/read/ViewListing.jsx'
import EditListing from './pages/update/EditListing.jsx'
import CreateLisiting from './pages/create/CreateLisiting.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
const App = () => {
  const [session, setSession] = useState(null)
  
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
        { path: '/', element: <LoginPage /> },
        { path: '/', element: <HomePage />},
        { path: '/products/:id', element: <ViewListing />}, 
        { path: '/create', element: <CreateLisiting />}, 
        { path: '/edit/:id', element: <EditListing />},  
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
