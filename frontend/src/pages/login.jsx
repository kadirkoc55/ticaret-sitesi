import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


function Login() {
     
      const[email,setEmail]=useState()
      const[password,setPassword]=useState()
      const navigate= useNavigate()

      const handleSubmit = (e)=>{
        e.preventDefault() //sayfanın tekrar yüklenerek sunucuya formun gönderilmesini engeller

        // Eğer email veya password boş ise, işlem yapmadan fonksiyonu sonlandır
        if (!email || !password) {
          console.log("Lütfen e-posta ve şifre girin.");
          
          return;
        }

        axios.post(process.env.REACT_APP_SERVER_URL+'/Login',{email,password})
        .then(result =>{console.log(result)
            if(result.data === "başarılı"){
                navigate('/shop')
            }
        })
        .catch(err=>console.log(err))
      }
  return (
    <div className="login flex  justify-center items-center bg-slate-300  ">
      <div className="content bg-white p-3 rounded w-56 shadow-2xl">
      <h2 className="text-3xl font-medium">Login</h2>
      <form onSubmit={handleSubmit}>
          <div>
          

          <label htmlFor="email">
          <strong>Email</strong>
          </label>
          <input 
           type="text"
           placeholder="enter email"
           autoComplete="off"
           name="email"
           className="form-control rounded-0  "
           onChange={(e)=>setEmail(e.target.value)} 
          />

          <label htmlFor="password">
          <strong>Password</strong>
          </label>
          <input 
           type="password"
           placeholder="enter password"
           autoComplete="off"
           name="password"
           className="form-control rounded-0  "
           onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-green-500 text-slate-100 rounded w-72 my-2 capitalize">Login</button>
        <p className="relative bottom-2 text-sm capitalize">already have an account</p>
        <Link to="/"><button type="submit" className="bg-slate-100  border rounded w-72 capitalize">Signup</button></Link>
      </form>
      </div>
    </div>
  )
}

export default Login
