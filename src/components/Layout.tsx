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
		<div className="flex flex-col h-screen justify-between">
			<NavBar links={routes} />
			<div className="mb-auto xl:ml-40">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
