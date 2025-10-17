import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "../shared/FormField";
import Button from "../shared/Button";

const ContactForm: React.FC = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  return (
    <div className="glass rounded-3xl p-10 shadow-2xl hover-lift animate-fade-in-left">
      <div className="mb-8">
        <h3 className="text-3xl font-black text-gray-900 mb-2">
          Send us a Message
        </h3>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log("Form submitted:", values);
            alert("Thank you for your message! We'll get back to you soon.");
            resetForm();
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <FormField
              name="name"
              label="Full Name"
              type="text"
              placeholder="Enter your name"
            />

            <FormField
              name="email"
              label="Email Address"
              type="email"
              placeholder="Enter your email"
            />

            <FormField
              name="message"
              label="Message"
              as="textarea"
              rows={5}
              placeholder="Tell us about your fitness goals..."
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
