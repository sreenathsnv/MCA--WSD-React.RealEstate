import React, { useState } from 'react';

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = () => {
    // Implement form submission logic
    // For now, we're just logging the form data
    console.log(formData);
  };

  return (
    <div>
      <h2>Contact Agent</h2>
      <input
        type="text"
        placeholder="Name"
        className='form-control'
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
     
      <button className='btn btn-primary' onClick={handleSubmit}>Submit Inquiry</button>
    </div>
  );
}

export default InquiryForm;
