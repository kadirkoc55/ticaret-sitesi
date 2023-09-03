import { useState } from "react"
import { Link } from "react-router-dom"

import axios from 'axios'
import { useNavigate } from "react-router-dom"
function Signup() {
   
      const[name,setName]=useState()
      const[email,setEmail]=useState()
      const[password,setPassword]=useState()
      const navigate= useNavigate()

      const handleSubmit = (e)=>{
        e.preventDefault() //sayfanın tekrar yüklenerek sunucuya formun gönderilmesini engeller
        axios.post(process.env.REACT_APP_SERVER_URL+'/Signup',{name,email,password}) //axios ile sunucuya post(veri alma) isteği yapılır.
        .then(result =>{console.log(result)
        navigate('/Login') 
        //istek başarılı olunca 'then' bloğu içinde sunucudan gelen yanıt('result')konsola yazdırılır.sonra 'navigate' kullanılarak 'login' yoluna otomatik yönlendirir.
        })
        .catch(err=>console.log(err))//hata oluşursa 'catch' içindeki 'err' ekrana yazdırır
      }
  return (
    <div className="signup flex  justify-center items-center bg-slate-300   h-96 ">
      <div className="content bg-white p-3 rounded shadow-2xl  ">
      <h2 className="text-3xl font-medium">Signup</h2>
      <form  onSubmit={handleSubmit}>
          <div>
          <label htmlFor="name">
          <strong>Name</strong>
          </label>
          <input 
           type="text"
           placeholder="enter name"
           autoComplete="off"
           name="name"
           className="form-control rounded-0  " 
           onChange={(e)=>setName(e.target.value)}
          />

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
        <button type="submit" className="bg-green-500 text-slate-100 rounded w-72 my-2 capitalize">Signup</button>
        <p className="relative bottom-2 text-sm capitalize">already have an account</p>
        <Link to="/Login"><button type="submit" className="bg-slate-100  border rounded w-72 capitalize">login</button></Link>
      </form>
      </div>
    </div>
  )
}

export default Signup
