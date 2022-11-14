import React from "react";
import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  return (
    <div>
      <h2>show phone id: {phone.id}</h2>
      <h3>Name: {phone.name}</h3>
      <p>
        <b>
          <small>
            <i>Price : {phone.price}</i>
          </small>
        </b>
      </p>
      <img src={phone.image} alt="" />
      <p>{phone.description}</p>
    </div>
  );
};

export default Phone;
