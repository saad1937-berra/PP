import React from 'react';

function Contact() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out to us.</p>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name:
            <input type="text" name="name" style={{ marginLeft: '10px' }} />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Email:
            <input type="email" name="email" style={{ marginLeft: '10px' }} />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Message:
            <textarea name="message" style={{ marginLeft: '10px' }} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;