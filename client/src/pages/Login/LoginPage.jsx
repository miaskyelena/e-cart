import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../../Client.jsx'
import HomePage from '../Home/HomePage.jsx'
import ReadProducts from '../Read/ReadSellingProducts.jsx'
import AuthPhoto from '../../assets/images/auth-photo-1.jpg'
import './LoginPage.css'


const LoginPage = () => {
    const user = useUser()
    const supabase = useSupabaseClient()
  
    
    async function signUpNewUser() {
        const { data, error } = await supabase.auth.signUp({
          email: 'example@email.com',
          password: 'example-password',
          options: {
            redirectTo: 'https//example.com/welcome'
          }
        })
      }

      async function signInWithEmail() {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: 'example@email.com',
          password: 'example-password',
          options: {
            redirectTo: 'https//example.com/welcome'
          }
        })
      }

      
    if (!user) {
        return (
            <>
            <div className='row no-gutters'>
                <div className='col left-side no-gutters'>
                    <div className='auth-container'>
                        <h1 className='text-center'>Buy, sell, and shop for anything.</h1><br/>
                        <Auth 
                        supabaseClient={supabase} 
                        appearance={{ theme: ThemeSupa}}
                        providers={['google']}
                        socialColors={true}
                        />
                    </div>  
                </div>
                <div className='col right-side no-gutters'>
                    <img src={AuthPhoto} alt='auth'/>
                </div>
            </div>
            </>
        )
    } else {
        return (
            <ReadProducts />
        )
    }
}

export default LoginPage
