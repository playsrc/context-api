import { FormEvent, useState } from "react";

type FormTypes = {
  name: string;
  onUpdateName: (name: string) => void;
};

export default function Form({ name, onUpdateName }: FormTypes) {
  const [newName, setNewName] = useState(name);

  function onSubmitUpdate(e: FormEvent) {
    e.preventDefault();
    onUpdateName(newName);
  }

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={onSubmitUpdate}>
        <input
          type="text"
          placeholder="New name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
}

