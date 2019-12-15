import { MyButton } from "./Button";

export default function ContactForm(props) {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    isValidating,
    isValid,
    values: { consent, name, email, phone, message }
  } = props;

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(e);
  }

  function onChange(e) {
    handleChange(e);
  }

  function onBlur(e) {
    handleBlur(e);
  }

  return (
    <form
      method="POST"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      className="py-2"
      noValidate
      onSubmit={onSubmit}
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          disabled={isSubmitting}
          onChange={onChange}
          onBlur={onBlur}
          type="text"
          className={`form-control ${
            touched.name && errors.name ? "is-invalid" : ""
          }`}
          id="name"
          name="name"
          value={name}
        />
        {touched.name && errors.name && (
          <small id="name-error-text" className="form-text invalid-feedback">
            {errors.name}
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          disabled={isSubmitting}
          onChange={onChange}
          onBlur={onBlur}
          type="email"
          className={`form-control ${
            touched.email && errors.email ? "is-invalid" : ""
          }`}
          id="email"
          name="email"
          value={email}
        />
        {touched.email && errors.email && (
          <small id="email-error-text" className="form-text invalid-feedback">
            {errors.email}
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          disabled={isSubmitting}
          onChange={onChange}
          onBlur={onBlur}
          type="tel"
          className={`form-control ${
            touched.phone && errors.phone ? "is-invalid" : ""
          }`}
          id="phone"
          name="phone"
          value={phone}
        />
        {touched.phone && errors.phone && (
          <small id="phone-error-text" className="form-text invalid-feedback">
            {errors.phone}
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          disabled={isSubmitting}
          onChange={onChange}
          onBlur={onBlur}
          className={`form-control ${
            touched.message && errors.message ? "is-invalid" : ""
          }`}
          id="message"
          name="message"
          rows="3"
          value={message}
        />
        {touched.message && errors.message && (
          <small id="message-error-text" className="form-text invalid-feedback">
            {errors.message}
          </small>
        )}
      </div>
      <div className="form-group">
        <div className="form-check">
          <input
            disabled={isSubmitting}
            onChange={onChange}
            onBlur={onBlur}
            checked={consent}
            value={consent}
            type="checkbox"
            className={`form-check-input ${
              touched.consent && errors.consent ? "is-invalid" : ""
            }`}
            id="consent"
            name="consent"
          />
          <label className="form-check-label" htmlFor="consent">
            I consent to Festival Campgrounds collecting my details through this
            form.
          </label>
          {touched.consent && errors.consent && (
            <small
              id="consent-error-text"
              className="form-text invalid-feedback"
            >
              {errors.consent}
            </small>
          )}
        </div>
      </div>
      <MyButton
        disabled={isSubmitting || isValidating || !isValid}
        type="submit"
      >
        Send
      </MyButton>
    </form>
  );
}
