import { NavLink } from 'react-router-dom';
import { Searchbar } from './Searchbar';
import { User } from './User';
import { CountrySelect } from './CountrySelect';
import { useState } from 'react';

export type NavBarLink = {
	path: string;
	title: string;
};

type Props = {
	links: NavBarLink[];
};

export function NavBar({ links }: Props) {
	const [open, setOpen] = useState(false);

	return (
		<div className="h-[108px] w-screen">
			<div className="h-[31px] bg-[#C4C9C1] flex items-center justify-center">
				<p className="font-bold text-[12px] font-['Oswald] uppercase">babyboo for professionals</p>
			</div>
			<div className="bg-[#362B24] h-[77px] flex flex-row items-center justify-center">
				<div className="flex flex-col">
					<button onClick={() => setOpen(!open)} className="md:text-white xl:hidden">
						BUTTON
					</button>
				</div>
				<div className="flex flex-row items-center gap-[40px] xl:ml-60 xl:mr-auto sm:m-auto ">
					<img src="/icons/babyboologo.svg" alt="Workflow" />

					<div className="">
						<ul className="xl:flex flex-row gap-[20px] items-center justify-center md:hidden">
							{links.map((link, index) => (
								<NavLink key={index} to={link.path} className="text-white text-[14px]">
									{link.title}
								</NavLink>
							))}
						</ul>
					</div>
					<Searchbar />
					<User />
					<CountrySelect />
				</div>
			</div>
			<div>
				{open && (
					<ul className="flex flex-col absolute bg-[#362B24] xl:hidden">
						{links.map((link, index) => (
							<NavLink
								key={index}
								to={link.path}
								onClick={() => setOpen(!open)}
								className="hover:bg-slate-100 text-[14px] p-2 text-white">
								{link.title}
							</NavLink>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
