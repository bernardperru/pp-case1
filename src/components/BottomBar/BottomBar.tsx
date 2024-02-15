import { Box, BoxProps } from "./Box";

const boxes: BoxProps[] = [
  {
    buttonIcon: "/icons/rightarrow.svg",
    buttonText: "Gå til",
    icon: "/icons/telt.svg",
    interact: () => {},
    title: "POS Bestilling",
  },
  {
    buttonIcon: "/icons/downloadcloud.svg",
    buttonText: "Download",
    icon: "/icons/picturepack.svg",
    interact: () => {},
    title: "Billedepakke",
  },
  {
    buttonIcon: "/icons/downloadcloud.svg",
    buttonText: "Download",
    icon: "/icons/somekampagne.svg",
    interact: () => {},
    title: "SOME kampagne",
  },
  {
    buttonIcon: "/icons/rightarrow.svg",
    buttonText: "Gå til",
    icon: "/icons/bolt.svg",
    interact: () => {},
    title: "Reservedele",
  },
];

export function BottomBar() {
  return (
    <div className="h-[351px] bg-[#C4C9C1] flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex">
          <p className="mr-1 text-[22px] font-[400px] font-[Oswald]">
            Dine forhandler ressourcer for
          </p>{" "}
          <p className="text-[22px]  font-[Oswald] font-black">
            DYLAN puslepude
          </p>
        </div>
        <div className="gap-[133px] pt-3 flex">
          {boxes.map((box, index) => (
            <Box
              key={index}
              buttonIcon={box.buttonIcon}
              buttonText={box.buttonText}
              icon={box.icon}
              interact={box.interact}
              title={box.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
