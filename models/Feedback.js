import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: String,
  batch: String,
  staff: String,
  feedback: String,
});
await axios.post('http://localhost:5000/api/feedback', formData);

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;
