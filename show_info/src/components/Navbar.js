import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './Navbarstyle';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/Favourites' activeStyle>
        Favourites
		</NavLink>
		
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
