import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const carouselSchema = new Schema({
  title: String,
  description: String,
  image: String,
});

const Carousel =
  mongoose.models.Carousel || mongoose.model("Carousel", carouselSchema);
export default Carousel;
