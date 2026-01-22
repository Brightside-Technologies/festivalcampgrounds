import React from "react";
import clsx from "clsx";
import Button from "./Button";

function FieldError({ id, show, children }) {
  if (!show) return null;
  return (
    <p id={id} className="mt-1 text-sm text-rose-600">
      {children}
    </p>
  );
}

function getInputClasses(hasError) {
  return clsx(
    "mt-1 block w-full rounded-md border bg-white px-3 py-2 text-sm text-zinc-900",
    "placeholder:text-zinc-400",
    "focus:outline-none focus:ring-2 focus:ring-[#f4778d]/40",
    hasError
      ? "border-rose-400 focus:border-rose-400 focus:ring-rose-300/40"
      : "border-zinc-300 focus:border-[#f4778d]"
  );
}

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

  return (
    <form
      method="POST"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      noValidate
      onSubmit={onSubmit}
      className="py-2"
    >
      {/* Netlify honeypot */}
      <input name="bot-field" className="hidden" />

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="text-sm font-medium text-zinc-900">
            Name
          </label>
          <input
            disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="name"
            name="name"
            value={name}
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={
              touched.name && errors.name ? "name-error-text" : undefined
            }
            className={getInputClasses(touched.name && errors.name)}
          />
          <FieldError id="name-error-text" show={touched.name && !!errors.name}>
            {errors.name}
          </FieldError>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="text-sm font-medium text-zinc-900">
            Email
          </label>
          <input
            disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            id="email"
            name="email"
            value={email}
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={
              touched.email && errors.email ? "email-error-text" : undefined
            }
            className={getInputClasses(touched.email && errors.email)}
          />
          <FieldError
            id="email-error-text"
            show={touched.email && !!errors.email}
          >
            {errors.email}
          </FieldError>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-zinc-900">
            Phone
          </label>
          <input
            disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            aria-invalid={touched.phone && !!errors.phone}
            aria-describedby={
              touched.phone && errors.phone ? "phone-error-text" : undefined
            }
            className={getInputClasses(touched.phone && errors.phone)}
          />
          <FieldError
            id="phone-error-text"
            show={touched.phone && !!errors.phone}
          >
            {errors.phone}
          </FieldError>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="text-sm font-medium text-zinc-900"
          >
            Message
          </label>
          <textarea
            disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
            id="message"
            name="message"
            rows={4}
            value={message}
            aria-invalid={touched.message && !!errors.message}
            aria-describedby={
              touched.message && errors.message
                ? "message-error-text"
                : undefined
            }
            className={clsx(
              getInputClasses(touched.message && errors.message),
              "resize-y"
            )}
          />
          <FieldError
            id="message-error-text"
            show={touched.message && !!errors.message}
          >
            {errors.message}
          </FieldError>
        </div>

        {/* Consent */}
        <div>
          <div className="flex items-start gap-2">
            <input
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              checked={!!consent}
              type="checkbox"
              id="consent"
              name="consent"
              aria-invalid={touched.consent && !!errors.consent}
              aria-describedby={
                touched.consent && errors.consent
                  ? "consent-error-text"
                  : undefined
              }
              className={clsx(
                "mt-1 h-4 w-4 rounded border-zinc-300 text-[#f4778d]",
                "focus:ring-2 focus:ring-[#f4778d]/40",
                touched.consent && errors.consent && "border-rose-400"
              )}
            />
            <label htmlFor="consent" className="text-sm text-zinc-800">
              I consent to Festival Campgrounds collecting my details through
              this form.
            </label>
          </div>

          <FieldError
            id="consent-error-text"
            show={touched.consent && !!errors.consent}
          >
            {errors.consent}
          </FieldError>
        </div>

        {/* Submit */}
        <div className="pt-1">
          <Button
            disabled={isSubmitting || isValidating || !isValid}
            type="submit"
            className={clsx(
              "w-full",
              (isSubmitting || isValidating || !isValid) &&
                "opacity-50 pointer-events-none"
            )}
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  );
}
