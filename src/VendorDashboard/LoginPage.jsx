import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
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
      validationErrors.username = "Username or email address is required";
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
      <h2 className="mb-4 text-xl font-bold">LOGIN</h2>
      <hr className="my-4" />
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2 text-sm text-gray-700">
          Username or email address *
        </label>
        <input
          type="text"
          required
          id="username"
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
      <div className="flex items-center mb-4">
        <input
          className="mr-2 leading-tight"
          name="rememberme"
          type="checkbox"
          checked={formData.rememberme}
          onChange={handleChange}
          id="rememberme"
        />
        <label htmlFor="rememberme" className="text-sm">
          Remember me
        </label>
      </div>
      <div className="my-6">
        <button
          id="loginButton"
          className="w-full px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-800"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
      <div className="text-center">
        <a href="#" className="text-blue-500 hover:underline">
          Lost your password?
        </a>
      </div>
    </div>
  );
}
