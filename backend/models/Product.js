const mongoose =require('mongoose')

const productSchema = new mongoose.Schema({
      id : Number,
      productName : String,
      price :Number,
      productImage:String,
})

const ProductModel = mongoose.model("products",productSchema)
module.exports=ProductModel
