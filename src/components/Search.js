import React from "react";

const Search = ({ setUser, submitHandler, user }) => {
  return (
    <div className="my-2">
      <h1 className="text-blue-900 text-xl mb-2 font-bold font-mono">
        GitHub Users Page
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="rounded-md border-2 border-slate-500 focus:outline-none px-2 py-1"
          placeholder="Search for a user..."
        />
      </form>
    </div>
  );
};

export default Search;
