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
        {links.map((link, index) => (
          <NavLink key={index} to={link.path} className="text-white h-5">
            {link.title}
          </NavLink>
        ))}
        <Searchbar></Searchbar>
      </div>
    </div>
  );
}
