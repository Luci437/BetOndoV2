import React from 'react'
import { GiAmericanFootballHelmet } from 'react-icons/gi';
import { NavLink } from 'react-router-dom'

function ListingMatch() {
  return (
    <div>
      <h3>Listing Match</h3>
      <NavLink to="/archon/create-match" className="archon-menu-buttons">
        <GiAmericanFootballHelmet className="archon-menu-icon" />
        Schedule Match
      </NavLink>
    </div>
  );
}

export default ListingMatch