export type CampaignProps = {
  renderDuration: () => JSX.Element;
  title: string;
  interact: () => void;
  background?: string;
};

export function CampaignCard({
  interact,
  renderDuration,
  title,
}: CampaignProps) {
  return (
    <div className="w-[288px] h-[310px] px-[6px] py-[18px] flex flex-col">
      <div className="rounded-[10px]">{renderDuration()}</div>
      <div className="flex flex-col h-[310px] justify-end">
        <p className=" text-[16px] font-bold uppercase leading-[24px] text-white py-1">
          {title}
        </p>
        <button
          className="bg-[#C4C9C1] rounded-[24px] w-fit px-2 h-[33px] flex place-items-center justify-center gap-[2px]"
          onClick={interact}
        >
          <p className="text-[14px] font-[700px]">Gå til kampagne</p>
          <img
            className="w-[20px] h-[20px]"
            src={"/icons/rightarrow.svg"}
            alt="Workflow"
          />
        </button>
      </div>
    </div>
  );
}
