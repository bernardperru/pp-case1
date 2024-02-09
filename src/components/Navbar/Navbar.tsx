import "./Navbar.css";
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
      <div className="flex items-center justify-center gap-7 h-5">
        {links.map((link) => (
          <div className="">{link.title}</div>
        ))}
      </div>
    </div>
  );
}

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
