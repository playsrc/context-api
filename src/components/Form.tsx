import { FormEvent, useState } from "react";
import { useName, useUpdateName } from "../contexts/NameContext";

export default function Form() {
  const name = useName();
  const updateName = useUpdateName();

  const [newName, setNewName] = useState(name);

  function onSubmitUpdate(e: FormEvent) {
    e.preventDefault();
    updateName(newName);
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

