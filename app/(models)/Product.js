import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const productSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  categoryId: Number,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
