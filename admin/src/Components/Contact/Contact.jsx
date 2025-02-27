import contact_img from '../Assets/Contact-us.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-form-container">
      <div className="form-header">
        <img
          className="form-banner"
          src={contact_img}
          alt="Contact Us"
        />
      </div>
      <h2>Contact Us Form</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name: <span>*</span></label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: <span>*</span></label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address: <span>*</span></label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="form-group">
            <label htmlFor="phone">Phone number: <span>*</span></label>
            <input type="text" id='phone' name='phone' required />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message: <span>*</span></label>
            <input type="text" id='message' name='message' required />
        </div>
        <button>Submit</button>
        
      </form>
    </div>
  );
}

export default Contact;
