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
    <div className="h-[351px] bg-[#C4C9C1] gap-[80px]">
      <p className="flex items-center justify-center">
        Dine forhandler ressourcer for DYLAN puslepude
      </p>
      <div className="h-[351px] gap-[80px] flex items-center justify-center">
        {boxes.map((box) => (
          <Box
            buttonIcon={box.buttonIcon}
            buttonText={box.buttonText}
            icon={box.icon}
            interact={box.interact}
            title={box.title}
          />
        ))}
      </div>
    </div>
  );
}
/* Dine forhandler ressourcer for DYLAN puslepude */

// position: absolute;
// width: 401px;
// height: 33px;
// left: 454px;
// top: 1056px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 400;
// font-size: 22px;
// line-height: 33px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-align: center;

// color: #261F18;

/* Rectangle 1 */

// position: absolute;
// width: 1920px;
// height: 351px;
// left: -1px;
// top: 1016px;

// background: #C4C9C1;
