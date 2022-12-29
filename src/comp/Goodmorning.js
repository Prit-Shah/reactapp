import React, { useState, useEffect } from "react";

function Goodmorning() {
  const [count, setcount] = useState(1);
  useEffect(() => {
    const newint = setInterval(() => {
      setcount(count + 1);
    }, 500);
    return () => clearInterval(newint);
  }, [count]);
  return (
    <div className="container-fluid py-5 text-center">
      <h1>Good Morning {count} Times</h1>
    </div>
  );
}

export default Goodmorning;
