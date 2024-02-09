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
    <div>
      <div className="w-screen h-8 bg-[#C4C9C1] text-center">
        <span className="font-bold uppercase font-mono">
          babyboo for professionals
        </span>
      </div>
      <div className="bg-[#362B24] h-20 flex justify-center items-center gap-7 ">
        <div>logo here</div>
        {links.map((link) => (
          <NavLink to={link.path} className="text-white h-5">
            {link.title}
          </NavLink>
        ))}
        <Searchbar />
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
