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
