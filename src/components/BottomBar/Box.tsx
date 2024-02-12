export type BoxProps = {
  icon: string;
  title: string;
  buttonIcon: string;
  buttonText: string;
  interact: () => void;
};

export function Box({
  buttonIcon,
  buttonText,
  icon,
  interact,
  title,
}: BoxProps) {
  return (
    <div className="flex flex-col w-[180px] h-[168px] bg-white rounded-[10px] p-3 gap-4">
      <img className="w-[32px] h-[32px] " src={icon} alt="Workflow" />
      <p className=" text-[20px] truncate">{title}</p>
      <button
        className="bg-[#C4C9C1] rounded-[24px] w-fit px-2 h-[33px] flex place-items-center justify-center gap-[2px]"
        onClick={interact}
      >
        <p className="text-[14px] font-normal">{buttonText}</p>
        <img className="w-[20px] h-[20px]" src={buttonIcon} alt="Workflow" />
      </button>
    </div>
  );
}

// /* Gå til */

// width: 28px;
// height: 23px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* arrow-right 1 */

// width: 20px;
// height: 20px;
