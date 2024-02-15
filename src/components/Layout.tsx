import { Outlet } from 'react-router-dom';
import { Footer, NavBar, NavBarLink } from '.';

const routes: NavBarLink[] = [
	{ path: '/serier', title: 'SERIER' },
	{ path: '/vugge', title: 'VUGGE' },
	{ path: '/børnesenge', title: 'BØRNESENGE' },
	{ path: '/opbevaring', title: 'OPBEVARING' },
	{ path: '/højstol', title: 'HØJSTOL' },
	{ path: '/pusle', title: 'PUSLE' },
	{ path: '/tekstiler', title: 'TEKSTILER' },
	{ path: '/tilbehør', title: 'TILBEHØR' },
	{ path: '/reservedele', title: 'RESERVEDELE' },
];

export function Layout() {
	return (
		<div>
			<NavBar links={routes} />
			<div className="pl-60 min-h-[465px]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
