import React from "react";

export default function Me({ name, position }) {
  return (
    <div>
      <h1 className="my-name">{name}</h1>
      <h2 className="my-position">{position}</h2>
    </div>
  );
}
