// src/components/FeedbackForm.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    staff: '',
    feedback: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', formData);
      alert('Feedback submitted!');
      setFormData({ name: '', batch: '', staff: '', feedback: '' });
    } catch (err) {
      alert('Error submitting feedback');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container p-4 bg-success p-2 text-white bg-opacity-75 border rounded mt-5" style={{ maxWidth: '500px' }}>
  <h2 className="mb-4 text-center">Feedback Form</h2>

  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
  </div>

  <div className="mb-3">
    <label className="form-label">Batch</label>
    <select name="batch" className="form-select" value={formData.batch} onChange={handleChange} required>
      <option value="">Select Batch</option>
      <option value="Batch 01">Batch 01</option>
      <option value="Batch 02">Batch 02</option>
      <option value="Batch 03">Batch 03</option>
      <option value="Batch 04">Batch 04</option>
    </select>
  </div>

  <div className="mb-3">
    <label className="form-label">Staff Name</label>
    <select name="staff" className="form-select" value={formData.staff} onChange={handleChange} required>
      <option value="">Select Staff</option>
      <option value="abishek">abishek</option>
      <option value="Nehru nandha">Nehru nandha</option>
      <option value="Lokesh">Lokesh</option>
      <option value="Subhash">Subhash</option>
    </select>
  </div>

  <div className="mb-3">
    <label className="form-label">Feedback</label>
    <textarea name="feedback" className="form-control" rows="4" value={formData.feedback} onChange={handleChange} required />
  </div>

  <button type="submit" className="btn btn-primary w-100">Submit</button>
</form>

  );
};

export default FeedbackForm;
