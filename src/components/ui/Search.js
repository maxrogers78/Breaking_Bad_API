import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const handleInputChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus="off"
          value={text}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
