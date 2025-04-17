import React, { useState } from "react";

export default function Trainings() {
  const [trainings, setTrainings] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleUpload = () => {
    const newTraining = {
      id: Date.now(),
      title,
      description,
    };
    setTrainings([...trainings, newTraining]);
    setTitle("");
    setDescription("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upload Training</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: "1rem" }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: "block", marginBottom: "1rem" }}
      />
      <button onClick={handleUpload}>Upload</button>

      <h3 style={{ marginTop: "2rem" }}>Available Trainings</h3>
      <ul>
        {trainings.map((training) => (
          <li key={training.id}>
            <strong>{training.title}</strong>
            <p>{training.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}