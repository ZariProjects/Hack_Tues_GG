import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CardSchema = new Schema({
  id: ObjectId,
  isCertified=Boolean,
  productName=String,
  sellerName=String,
  rating=Number,
  price=Number,
  img=Image
});

const CardModel = mongoose.model('CardModel', CardSchema);

export default CardModel;