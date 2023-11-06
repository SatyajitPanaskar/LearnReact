import React, { useState } from "react";

function FromHandling() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isSubscribed: "",
    role: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data", formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="isSubscribed">Subscribe : </label>
          <input
            type="checkbox"
            id="isSubscribed"
            name="isSubscribed"
            value={formData.isSubscribed}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role : </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FromHandling;
