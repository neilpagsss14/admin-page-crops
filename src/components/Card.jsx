import React from "react";

function Card({ data }) {
  return (
    <div>
      {data.map((item, key) => (
        <div className="flex gap-2 flex-col justify-center" key={key}>
          {" "}
          {item}
        </div>
      ))}
    </div>
  );
}

export default Card;
