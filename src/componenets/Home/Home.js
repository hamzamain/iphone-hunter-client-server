import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const phones = useLoaderData();
  return (
    <div>
      <h2>this is home: {phones.length}</h2>
      {phones.map((ph) => (
        <li>
          <Link to={`/phones/${ph.id}`}>{ph.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Home;
