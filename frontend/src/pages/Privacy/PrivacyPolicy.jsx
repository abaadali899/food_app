import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Effective Date: August 5, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          We value your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you use our restaurant services and website.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <ul>
          <li>Personal Identification Information (Name, Email, Phone, etc.)</li>
          <li>Order and reservation details</li>
          <li>Browser and usage data</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To process your orders and reservations</li>
          <li>To improve user experience</li>
          <li>To send notifications and updates</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          We implement strict security measures to protect your data from unauthorized access or disclosure.
        </p>
      </section>

      <section>
        <h2>5. Cookies</h2>
        <p>
          We may use cookies to enhance your browsing experience. You can control cookie settings in your browser.
        </p>
      </section>

      <section>
        <h2>6. Third-Party Services</h2>
        <p>
          We do not sell or share your personal data with third parties, except for trusted partners involved in fulfilling your order or reservation.
        </p>
      </section>

      <section>
        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this policy occasionally. Changes will be posted on this page with the revised date.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@example.com">support@example.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
