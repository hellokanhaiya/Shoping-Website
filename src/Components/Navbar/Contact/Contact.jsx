import styles from "./Contact.module.css";
import React, { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      setIsSubmitted(true);
      // Here you can also add the code to send form data to your server if needed
    }
  };

  const offices = [
    {
      country: "United States",
      title: "United States Office",
      address: "205 Middle Road, 2nd Floor, New York",
      phone: "+1 1234 567 88",
      email: "info@example.com",
    },
    {
      country: "United Kingdom",
      title: "United Kingdom Office",
      address: "79 Manor Way, 2nd Floor, Great Fransham",
      phone: "+49 1234 567 88",
      email: "contact@example.com",
    },
    {
      country: "Germany",
      title: "Germany Office",
      address: "Holstenwall 86, Sachsen-Anhalt, Zschornewitz",
      phone: "+44 1234 567 88",
      email: "info@example.com",
    },
  ];

  return (
    <div className={`${styles.contactContainer} my-10`}>
      <h2 className="text-[#818ea0]">You can ask us questions !</h2>
      <h1 className="text-[50px] font-semibold">
        Contact us for all your questions and opinions, or you can solve your
        problems in a shorter time with our contact offices.
      </h1>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {offices.map((office, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md"
              >
                <span className="block text-lg font-bold">
                  {office.country}
                </span>
                <h5 className="mt-2 text-xl font-semibold">{office.title}</h5>
                <p className="mt-2 text-center">{office.address}</p>
                <p className="mt-2">
                  <a
                    href={`tel:${office.phone}`}
                    className="text-blue-500 hover:underline"
                  >
                    {office.phone}
                  </a>
                </p>
                <p className="mt-2">
                  <a
                    href={`mailto:${office.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {office.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-gray-700">
                  Nam maximus nunc a augue pulvinar, non euismod mauris tempus.
                  Cras non elit vel magna molestie pellentesque in eu dui. Donec
                  laoreet quis erat vitae finibus. Vestibulum enim eros, porta
                  eget quam et, euismod dictum elit.
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <img
                  src="https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/10/contact-1.jpg"
                  alt=""
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-2xl font-semibold">Get in Touch</h3>
                <p className="mb-6 text-gray-700">
                  Quisque mattis tortor eu tristique sodales. Aenean sit amet
                  justo nec sem vestibulum.
                </p>
                {isSubmitted ? (
                  <div className="font-semibold text-green-500">
                    Your message has been sent.
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-full px-2 md:w-1/2">
                        <label className="block text-gray-700">
                          Your name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                          required
                        />
                      </div>
                      <div className="w-full px-2 md:w-1/2">
                        <label className="block text-gray-700">
                          Your email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Your message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
