const express = require("express")//sunucu oluşturur
const mongoose = require("mongoose")//mongodb ile iletişim kurar
const cors = require("cors")//sunucu güvenliği
const dotenv = require("dotenv")
dotenv.config()
const ProductModel = require('./models/Product')
const EmployeeModel = require("./models/Employee")
//EmployeeModel:mongodb de veri modeline ulaşır

const app = express()//express uygulaması oluşturur
app.use(express.json())//json verileri işlenir
app.use(cors())//cors-origin isteklerine izin verir

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
});
//mongo db bağlantı kurar



// Yeni ürünü veritabanına kaydetmek için POST isteği
app.post('/Login',(req,res)=>{ //req:istek bilgileri,res:isteğe yanıt
  const{email,password}=req.body;//eposta ve şifreye erişim sağlar
  EmployeeModel.findOne({email:email})//veri modelleri içinde emaile göre kullanıcı arar.findOne şartı sağlayan ilk belgeyi döndürür.
  .then(user=>{
      if(user){
      if(user.password === password) {
          res.json("başarılı")
      }else{
          res.json("şifre yanlış")
      }
  }else{
          res.json("mevcut değil")
      }
  })
})

app.post('/Signup',(req,res) => {
  EmployeeModel.create(req.body)
  .then(employees =>res.json(employees))
  .catch(err => res.json(err))
})
app.post('/products', async (req, res) => {
    try {
      const newProduct = await ProductModel.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: 'Ürün eklenirken hata oluştu.' });
    }
  });

app.post('/Product',(req,res) => {
    ProductModel.create(req.body)
    .then(Product =>res.json(Product))
    .catch(err => res.json(err))
})


app.post('/CartItem',(req,res) => {
  ProductModel.create(req.body)
    .then(Product =>res.json(Product))
    .catch(err => res.json(err))
})

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("server çalışıyor")
})
