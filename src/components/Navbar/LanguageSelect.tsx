import { useState } from "react";

export function LanguageSelect() {
  const [language, setLanguage] = useState<string>("DK");

  const handleClick = () => {};

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
          {language}
        </p>
        <img
          className="w-[19px] h-[19px] "
          src="/icons/pilned.svg"
          alt="Workflow"
        />
      </button>
    </div>
  );
}
