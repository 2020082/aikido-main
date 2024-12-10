import React, { ChangeEvent, ReactNode } from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputField: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
}) => (
  <div className="input-group">
    <div className="input-label">
      <label htmlFor={name}>{label}:</label>
    </div>
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
}

const SelectField: React.FC<SelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
}) => (
  <div className="input-group">
    <div className="input-label">
      <label htmlFor={name}>{label}:</label>
    </div>
    <select id={name} name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export { InputField, SelectField };
