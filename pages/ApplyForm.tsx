/** @format */

import ImageCarousel from "@/components/imageCarousel";
import { InputField, SelectField } from "@/components/inputselect";
import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age?: string;
  classType?: string;
}

const ApplyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    classType: "",
  });

  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;
  const postapi =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

  const classTypeOptions = [
    { value: "morning", label: "Morning" },
    { value: "late", label: "Late" },
    { value: "child", label: "Child" },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const requestBody = {
        data: formData,
      };

      const response = await axios.post(
        postapi + "/api/forms",
        requestBody,
        config
      );
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <ImageCarousel
        textContent="Apply to Aikido"
        textdesc="Fill out form"
        image={"/image4.jpg"}
      />
      <div className="mt-[50vh] w-full">
        <h1 className="text-blue-500 ml-10 pt-5 pb-5 text-2xl">
          Applicant Details
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-row">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="input-row">
            <InputField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
            <InputField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="input-row">
            <InputField
              label="Age"
              name="age"
              value={formData.age || ""}
              onChange={handleInputChange}
              placeholder="Enter your age (optional)"
            />
            <SelectField
              label="Class Type"
              name="classType"
              value={formData.classType || ""}
              onChange={handleInputChange}
              options={classTypeOptions}
              placeholder="Select a class type (optional)"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 mb-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
