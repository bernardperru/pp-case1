import { NavLink } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import { User } from "./User";
import { CountrySelect } from "./CountrySelect";
export type NavBarLink = {
  path: string;
  title: string;
};

type Props = {
  links: NavBarLink[];
};

export function NavBar({ links }: Props) {
  return (
    <div className="h-[108px] w-screen ">
      <div className="h-[31px] bg-[#C4C9C1] flex items-center justify-center">
        <p className="font-bold text-[12px] font-['Oswald] uppercase">
          babyboo for professionals
        </p>
      </div>
      <div className="bg-[#362B24] h-[77px] w-screen flex flex-row items-center pl-[240px] gap-[174px]">
        <div className="flex flex-row items-center gap-[63px]">
          <img
            className="w-[126px] h-[46px]"
            src="/icons/babyboologo.svg"
            alt="Workflow"
          />
          <div className="flex flex-row items-center gap-[25px]  h-[31px]">
            <div className="flex flex-row items-start gap-[27px] h-[21px]">
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className="text-white text-[14px]"
                >
                  {link.title}
                </NavLink>
              ))}
            </div>

            <Searchbar></Searchbar>
          </div>
          <User></User>
          <CountrySelect></CountrySelect>
        </div>
      </div>
    </div>
  );
}

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

// /* Inside auto layout */
// flex: none;
// order: 2;
// flex-grow: 0;

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
