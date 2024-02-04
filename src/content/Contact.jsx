import "./Contact.css";

function Contact() {
  return (
    <div className="contactbody">
      <div>
        <h2>Contact Ducati Showroom</h2>
        <form>
          <label>Name:</label>
          <input placeholder="Enter Full Name" />

          <label>Email:</label>
          <input placeholder="enter valid email using @" />

          <label>Message:</label>
          <textarea placeholder="enter message here"></textarea>

          <submitbutton type="submit">Submit</submitbutton>
        </form>
      </div>
    </div>
  );
}

export default Contact;
