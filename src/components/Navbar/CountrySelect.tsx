import { useState } from "react";

type CountryItem = {
  title: string;
};

const countries: CountryItem[] = [
  { title: "UK" },
  { title: "DE" },
  { title: "DK" },
];

export function CountrySelect() {
  const [country, setCountry] = useState<string>("DK");
  const [dropDown, setDropDown] = useState<boolean>(false);
  const handleClick = () => {
    if (dropDown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };

  return (
    <div>
      <button
        className="flex flex-row items-center gap-[3px] justify-center w-[48px]"
        onClick={handleClick}
      >
        <img
          className="w-[19px] h-[19px] "
          src="/icons/globe.svg"
          alt="Workflow"
        />
        <p className="text-white w-[15px] text-[14px] font-normal flex items-center">
          {country}
        </p>
        <img
          className="w-[19px] h-[19px] "
          src="/icons/pilned.svg"
          alt="Workflow"
        />
      </button>
      {dropDown && (
        <ul className="absolute w-[48px] bg-white border rounded-md flex flex-col">
          {countries.map((country) => (
            <button
              className="hover:bg-slate-100"
              onClick={() => {
                setCountry(country.title);
                handleClick();
              }}
            >
              {country.title}
            </button>
          ))}
        </ul>
      )}
    </div>
  );
}
