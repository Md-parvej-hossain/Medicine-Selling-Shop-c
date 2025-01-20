const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-base-200 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-primary">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have questions or need assistance? Feel free to reach out using the
          form below. We're here to help!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Description */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-4">
              We value your feedback and inquiries. Whether you have a question,
              a suggestion, or need support, don’t hesitate to contact us. We
              aim to respond promptly to all messages.
            </p>
            <p className="text-gray-700">
              Alternatively, you can reach us directly at:
            </p>
            <ul className="mt-4 text-gray-800">
              <li>
                📧{' '}
                <a href="mailto:support@example.com" className="underline">
                  support@example.com
                </a>
              </li>
              <li>📞 +123 456 7890</li>
              <li>📍 123 Main Street, City, Country</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  placeholder="Write your message"
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="form-control">
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
