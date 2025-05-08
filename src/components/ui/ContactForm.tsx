import React, { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you would typically handle form submission
    // For example, sending data to an API
    console.log('Form submitted:', formData);
    alert('Form submitted! In a real implementation, this would send your data to a server.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="name">Name</label>
        <input 
          className={styles.formInput} 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="email">Email</label>
        <input 
          className={styles.formInput} 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="phone">Phone</label>
        <input 
          className={styles.formInput} 
          type="tel" 
          id="phone" 
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="message">Message</label>
        <textarea 
          className={styles.formTextarea} 
          id="message" 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <Button type="submit" onClick={undefined}>Send Message</Button>
    </form>
  );
};

export default ContactForm;