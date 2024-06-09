import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rememberme: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleClick = () => {
    const validationErrors = {};

    if (!formData.username) {
      validationErrors.username = "Username is required";
    }

    if (!formData.email) {
      validationErrors.email = "Email address is required";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/");
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="w-full p-6 mx-auto ">
      <h2 className="mb-4 text-xl font-bold">REGISTER</h2>
      <hr className="my-4" />
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2 text-sm text-gray-700">
          Username *
        </label>
        <input
          type="text"
          id="username"
          required
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.username && (
          <p className="mt-1 text-xs text-red-500">{errors.username}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm text-gray-700">
          Email address *
        </label>
        <input
          type="email"
          required
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-sm text-gray-700">
          Password *
        </label>
        <input
          type="password"
          required
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.password && (
          <p className="mt-1 text-xs text-red-500">{errors.password}</p>
        )}
      </div>
      <p className="text-sm">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our{" "}
        <span className="text-blue-600 cursor-pointer">privacy policy</span>.
      </p>
      <div className="my-4">
        <button
          className="w-full px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-800"
          onClick={handleClick}
        >
          Register
        </button>
      </div>
    </div>
  );
}
