import React from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import Map from '../components/contact/Map';

const ContactPage = () => {
  return (
    <>
      <ContactInfo />
      <ContactForm />
      <Map />
    </>
  );
};

export default ContactPage;