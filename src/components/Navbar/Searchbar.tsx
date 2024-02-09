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

/* Frame 2 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 5px 10px;
// gap: 64px;

// width: 153px;
// height: 31px;

// border: 1px solid #FFFFFF;
// border-radius: 13px;

// /* Frame 3 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// padding: 0px;
// gap: 64px;

// width: 133px;
// height: 21px;

// /* Søg... */

// margin: 0 auto;
// width: 27px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// display: flex;
// align-items: center;

// color: #FFFFFF;

// /* search 1 */

// margin: 0 auto;
// width: 12px;
// height: 12px;

/* Vector */

// position: absolute;
// left: 8.33%;
// right: 10.42%;
// top: 8.33%;
// bottom: 10.42%;

// border: 1.08333px solid #FFFFFF;
