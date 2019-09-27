import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Signup = () => {
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  const [email, setEmail] = useState('');
  const [strangerDanger, setStrangerDanger] = useState(false);
  const [mailchimpResponse, setMailchimpResponse] = useState({});

  function handleChange(e) {
    if (e.target.name === 'birthday') {
      setStrangerDanger(true);
      return;
    }
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (strangerDanger) return;

    addToMailchimp(email)
      .then(responseData => {
        /*
         * responseData will take this shape:
         * {
         *  result: String, "success" or "error"
         *  msg: String
         * }
         */
        setMailchimpResponse(responseData);
      })
      .catch(responseError => {
        setMailchimpResponse(responseError);
      });
  }

  return (
    <div className="Signup">
      <div className="Signup-container container">
        <form onSubmit={handleSubmit}>
          <input
            className="Signup-email"
            type="text"
            onChange={handleChange}
            placeholder="email"
            name="email"
          />
          <input
            className="birthday"
            type="text"
            onChange={handleChange}
            name="birthday"
          />
          <input
            className="Signup-submit button"
            type="submit"
            value="submit"
          />
        </form>
        {mailchimpResponse.result === 'success' ? (
          <p
            className="Signup-success"
            dangerouslySetInnerHTML={{ __html: mailchimpResponse.msg }}
          />
        ) : (
          ''
        )}
        {mailchimpResponse.result === 'error' ? (
          <p
            className="Signup-error"
            dangerouslySetInnerHTML={{ __html: mailchimpResponse.msg }}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Signup;
