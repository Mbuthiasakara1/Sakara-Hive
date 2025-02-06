import { useForm, ValidationError } from "@formspree/react";
import "./Contactform.css"
export default function Contactform() {
     const [state, handleSubmit] = useForm("manqjvrv");
     if (state.succeeded) {
       return <p>Thanks for joining!</p>;
     }
  return (
    <div>
      {state.succeeded ? (
        <div className="success-message">
          <h2>Thank you for your message!</h2>
          <p>{"We'll"} get back to you soon.</p>
        </div>
      ) : (
        <form form onSubmit={handleSubmit} className="form">
          <label htmlFor="name">Enter Your Full Name</label>
          <input id="name" type="text" name="name" placeholder="Full name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label htmlFor="email"> Enter Email </label>
          <input id="email" type="email" name="email" placeholder="Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Enter Message</label>
          <textarea id="message" name="message" placeholder="Message" />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
