import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: String,
  batch: String,
  staff: String,
  feedback: String,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;
