import React, { useState } from "react";

interface NameStepProps {
  cb: (field: string, value: string) => void;
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label>First Name:</label>
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setFirstName(value);
          }}
          value={firstName}
          className="input input-bordered input-primary w-full max-w-xs"
          required
        ></input>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <label>last Name:</label>
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setLastName(value);
          }}
          value={lastName}
          className="input input-bordered input-primary w-full max-w-xs"
          required
        ></input>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          props.cb("name", `${firstName} ${lastName}`)

        }}
      >
        Next
      </button>
    </div>
  );
};

export default NameStep;
