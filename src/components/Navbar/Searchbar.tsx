import React from "react";

export function Searchbar() {
  const [value, setValue] = React.useState("");

  return (
    <div className="box-border rounded-xl border-2 border-white flex items-center py-1 px-2">
      <input
        type="text"
        className="bg-inherit text-white focus:outline-none"
        placeholder="Søg..."
        onFocus={() => {}}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <img className="" src="/icons/search.svg" alt="Workflow" />
    </div>
  );
}
