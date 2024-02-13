import { Product } from "../../hooks/useGetOrder";
import { Response } from "../../types";
import { OldOrderItem } from "./OldOrderItem";

export function OldOrders({ data, loading, error }: Response<Product>) {
  let colorSwitch = true;

  const getColor = () => {
    const color = colorSwitch;
    colorSwitch = !colorSwitch;
    return color;
  };

  if (!data) {
    return <div></div>;
  }

  return (
    <div className="w-[350px]">
      <div className="flex place-content-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="w-[25px] h-[25px] "
            src="/icons/latestorder.svg"
            alt="Workflow"
          />
          <div className=" uppercase font-medium text-[16px]">
            seneste ordrer
          </div>
        </div>
        <div className="font-['Open Sans'] text-[14px] underline">Se alle</div>
      </div>
      <div className="py-2">
        <div className="flex flex-col gap-2 min-h-[310px] rounded-[10px] bg-[#F5F5F5] p-5">
          {data.map((item) => (
            <OldOrderItem item={item} color={getColor()}></OldOrderItem>
          ))}
        </div>
      </div>
    </div>
  );
}

// background: #F5F5F5;
// border-radius: 10px;

// /* Frame 53 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 5px;
// gap: 37px;

// width: 328px;
// height: 33px;

// background: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 52 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 10px;

// width: 150px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 43 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;

// width: 74px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* 02-02-2022 */

// width: 74px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 300;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* #4134534 */

// width: 66px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 51 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 13px;

// width: 131px;
// height: 23px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Se ordre */

// width: 56px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Genbestil */

// width: 62px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 54 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 5px;
// gap: 37px;

// width: 328px;
// height: 33px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 52 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 10px;

// width: 150px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 43 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;

// width: 74px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* 02-02-2022 */

// width: 74px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 300;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* #4134534 */

// width: 66px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 51 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 13px;

// width: 131px;
// height: 23px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Se ordre */

// width: 56px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Genbestil */

// width: 62px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 55 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 5px;
// gap: 37px;

// width: 328px;
// height: 33px;

// background: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 2;
// flex-grow: 0;

// /* Frame 52 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 10px;

// width: 150px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 43 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;

// width: 74px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* 02-02-2022 */

// width: 74px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 300;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* #4134534 */

// width: 66px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 51 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 13px;

// width: 131px;
// height: 23px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Se ordre */

// width: 56px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Genbestil */

// width: 62px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 56 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 5px;
// gap: 37px;

// width: 328px;
// height: 33px;

// /* Inside auto layout */
// flex: none;
// order: 3;
// flex-grow: 0;

// /* Frame 52 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 10px;

// width: 150px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 43 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;

// width: 74px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* 02-02-2022 */

// width: 74px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 300;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* #4134534 */

// width: 66px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 51 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 13px;

// width: 131px;
// height: 23px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Se ordre */

// width: 56px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Genbestil */

// width: 62px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 57 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 5px;
// gap: 37px;

// width: 328px;
// height: 33px;

// background: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 4;
// flex-grow: 0;

// /* Frame 52 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 10px;

// width: 150px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 43 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;

// width: 74px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* 02-02-2022 */

// width: 74px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 300;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* #4134534 */

// width: 66px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 51 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 13px;

// width: 131px;
// height: 23px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Se ordre */

// width: 56px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Genbestil */

// width: 62px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 58 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 5px;
// gap: 37px;

// width: 328px;
// height: 33px;

// /* Inside auto layout */
// flex: none;
// order: 5;
// flex-grow: 0;

// /* Frame 52 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 10px;

// width: 150px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 43 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;

// width: 74px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* 02-02-2022 */

// width: 74px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 300;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* #4134534 */

// width: 66px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 51 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 13px;

// width: 131px;
// height: 23px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Se ordre */

// width: 56px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Genbestil */

// width: 62px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 59 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 5px;
// gap: 37px;

// width: 328px;
// height: 33px;

// background: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 6;
// flex-grow: 0;

// /* Frame 52 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 10px;

// width: 150px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 43 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;

// width: 74px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* 02-02-2022 */

// width: 74px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 300;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* #4134534 */

// width: 66px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 51 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 13px;

// width: 131px;
// height: 23px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Se ordre */

// width: 56px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Genbestil */

// width: 62px;
// height: 23px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */
// text-decoration-line: underline;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
