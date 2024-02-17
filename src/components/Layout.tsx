import { Outlet } from 'react-router-dom';
import { Footer, NavBar, NavBarLink } from '.';

const routes: NavBarLink[] = [
	{ path: '/template', title: 'SERIER' },
	{ path: '/template', title: 'VUGGE' },
	{ path: '/template', title: 'BØRNESENGE' },
	{ path: '/template', title: 'OPBEVARING' },
	{ path: '/template', title: 'HØJSTOL' },
	{ path: '/template', title: 'PUSLE' },
	{ path: '/template', title: 'TEKSTILER' },
	{ path: '/template', title: 'TILBEHØR' },
	{ path: '/template', title: 'RESERVEDELE' },
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
