export type KampagneProps = {
  renderDuration: () => JSX.Element;
  title: string;
  interact: () => void;
};

export function KampagneCard({
  interact,
  renderDuration,
  title,
}: KampagneProps) {
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

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 700;
// font-size: 16px;
// line-height: 24px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// /* Group 14 */

// position: absolute;
// width: 288px;
// height: 310px;
// left: 240px;
// top: 668px;

// /* Rectangle 4 */

// position: absolute;
// width: 288px;
// height: 310px;
// left: 240px;
// top: 668px;

// background: linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(image.png);
// border-radius: 10px;

// /* Classic senge og skabe */

// position: absolute;
// width: 170px;
// height: 24px;
// left: 250px;
// top: 895px;

// color: #FFFFFF;

// /* Frame 41 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 3px 6px;
// gap: 10px;

// position: absolute;
// width: 184px;
// height: 22px;
// left: 250px;
// top: 683px;

// background: #854223;
// border-radius: 2px;

// /* August 2022 - september 2022 */

// width: 172px;
// height: 16px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 12px;
// line-height: 16px;
// display: flex;
// align-items: center;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 26 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 5px 15px;
// gap: 10px;

// position: absolute;
// width: 141px;
// height: 33px;
// left: 250px;
// top: 924.21px;

// background: #C4C9C1;
// border-radius: 24px;

// /* Gå til kampagne */

// width: 83px;
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

// width: 18px;
// height: 18px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Group */

// position: absolute;
// left: 6.25%;
// right: 1.83%;
// top: 17.46%;
// bottom: 17.46%;

// /* Vector (Stroke) */

// position: absolute;
// left: 6.25%;
// right: 6.25%;
// top: 46.88%;
// bottom: 46.88%;

// background: #261F18;

// /* Vector (Stroke) */

// position: absolute;
// left: 61.21%;
// right: 1.83%;
// top: 17.46%;
// bottom: 17.46%;

// background: #261F18;
