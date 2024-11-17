const ContactUs = () => {
  return (
    <div>
      <h1>Contact us</h1>
      <div className="contact-card">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input className="message-input" placeholder="Message" />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};

export default ContactUs;
