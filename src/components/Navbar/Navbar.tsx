import { NavLink } from "react-router-dom";
import { Searchbar } from "./Searchbar";
export type NavBarLink = {
  path: string;
  title: string;
};

type Props = {
  links: NavBarLink[];
};

export function NavBar({ links }: Props) {
  return (
    <div className="">
      <div className="h-8 bg-[#C4C9C1] text-center">
        <span className="font-bold uppercase font-mono">
          babyboo for professionals
        </span>
      </div>
      <div className="bg-[#362B24] h-20 flex justify-start items-center gap-7 pl-60">
        <img className="" src="/icons/babyboologo.svg" alt="Workflow" />
        {links.map((link) => (
          <NavLink to={link.path} className="text-white h-5">
            {link.title}
          </NavLink>
        ))}
        <Searchbar></Searchbar>
      </div>
    </div>
  );
}

/* Rectangle 2 */

// position: absolute;
// width: 1920px;
// height: 77px;
// left: 0px;
// top: 31px;

// background: #362B24;
/* Rectangle 2 */

/* Rectangle 2 */
/* Frame 18 */

/* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 174px;

// position: absolute;
// width: 1411.11px;
// height: 46.16px;
// left: 240px;
// top: 46px;

// /* Frame 17 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 63px;

// width: 1091.11px;
// height: 46.16px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* BABYBOO */

// width: 126.11px;
// height: 46.16px;

// background: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 16 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 25px;

// width: 902px;
// height: 31px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 1 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 0px;
// gap: 27px;

// width: 724px;
// height: 21px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Serier */

// width: 41px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 700;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// text-transform: uppercase;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Vugge */

// width: 39px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 700;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// text-transform: uppercase;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Børnesenge */

// width: 75px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 700;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// text-transform: uppercase;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 2;
// flex-grow: 0;

// /* Opbevaring */

// width: 74px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 700;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// text-transform: uppercase;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 3;
// flex-grow: 0;

// /* højstol */

// width: 50px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 700;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// text-transform: uppercase;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 4;
// flex-grow: 0;

// /* pusle */

// width: 36px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 700;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// text-transform: uppercase;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 5;
// flex-grow: 0;

// /* tekstiler */

// width: 59px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 700;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// text-transform: uppercase;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 6;
// flex-grow: 0;

// /* Tilbehør */

// width: 57px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 700;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// text-transform: uppercase;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 7;
// flex-grow: 0;

// /* Reservedele */

// width: 77px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 700;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// text-transform: uppercase;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 8;
// flex-grow: 0;

// /* Frame 2 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 5px 10px;
// gap: 64px;

// width: 153px;
// height: 31px;

// border: 1px solid #FFFFFF;
// border-radius: 13px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 3 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// padding: 0px;
// gap: 64px;

// width: 133px;
// height: 21px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 1;

// /* Søg... */

// margin: 0 auto;
// width: 27px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// display: flex;
// align-items: center;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* search 1 */

// margin: 0 auto;
// width: 12px;
// height: 12px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Vector */

// position: absolute;
// left: 8.33%;
// right: 10.42%;
// top: 8.33%;
// bottom: 10.42%;

// border: 1.08333px solid #FFFFFF;

// /* Frame 6 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 25px;

// width: 146px;
// height: 21px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 5 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 10px;

// width: 73px;
// height: 21px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* user-check 1 */

// width: 19px;
// height: 19px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Vector */

// position: absolute;
// left: 4.17%;
// right: 4.17%;
// top: 12.5%;
// bottom: 12.5%;

// border: 1.58333px solid #FFFFFF;

// /* Babybob */

// width: 44px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// display: flex;
// align-items: center;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 4 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 0px;
// gap: 3px;

// width: 48px;
// height: 21px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Vector (Stroke) */

// width: 12px;
// height: 12px;

// background: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* DK */

// width: 15px;
// height: 21px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */
// display: flex;
// align-items: center;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* chevron-down 1 */

// width: 15px;
// height: 15px;

// /* Group */

// position: absolute;
// left: 25%;
// right: 25%;
// top: 37.5%;
// bottom: 37.5%;

// /* Vector */

// position: absolute;
// left: 25%;
// right: 25%;
// top: 37.5%;
// bottom: 37.5%;

// border: 1.25px solid #FFFFFF;
