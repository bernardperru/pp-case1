import { OrderListItem } from "../../Api";

type Props = {
  item: OrderListItem;
};

export function OrderItem({ item }: Props) {
  return (
    //fram48
    <div className="flex items-center gap-[188px] p-0 bg-[#FFFFFF] h-[58px]">
      {/*frame46*/}
      <div className="flex items-start p-0 gap-[13px] w-[220px] isolate">
        {/*picture*/}
        <div className="rounded-[3px] w-[58px] h-[58px] bg-slate-500"></div>
        {/*frame33*/}
        <div className="p-0">
          <div className="uppercase font-medium text-[16px] pt-1 text-[#261F18]">
            {item.name}
          </div>
          <div className="font-sans font-[400] text-[14px]  text-[#261F18]">
            {item.id}
          </div>
        </div>
      </div>
      {/*frame45*/}
      <div className="flex-row items-start p-0 isolate">
        {/*frame31*/}
        <div className="flex items-start px-[20px] gap-[89px] py-[10px]">
          <div className="flex uppercase text-center font-[400] text-[14px] text-[#261F18]">
            {item.attenuation_level}
          </div>
          <div className="flex uppercase text-center font-[400] text-[14px] text-[#261F18]">
            {item.first_brewed}
          </div>
          <div className="flex uppercase text-center font-[400] text-[14px] text-[#261F18]">
            {item.ph}
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

// /* Frame 44 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 10px 20px;
// gap: 10px;

// /* Frame 31 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 10px 20px;
// gap: 10px;

// width: 69px;
// height: 41px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* 1 stk */

// width: 29px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 44 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 10px 20px;
// gap: 10px;

// width: 70px;
// height: 41px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* -12% */

// width: 30px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 31 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 10px 20px;
// gap: 10px;

// width: 102px;
// height: 41px;

// /* Inside auto layout */
// flex: none;
// order: 2;
// flex-grow: 0;

// /* 499,99 dkk */

// width: 62px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
