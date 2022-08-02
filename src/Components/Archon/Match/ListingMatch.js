import React from 'react'
import { GiAmericanFootballHelmet } from 'react-icons/gi';
import { NavLink } from 'react-router-dom'
import EachMatchList from './EachMatchList';

function ListingMatch() {
  return (
    <div className="listing-main-container">
      <div className="listing-title-container">
        <h3 className="forms-title">Listing Match</h3>
        <NavLink
          to="/archon/list-matches/create-match"
          className="archon-menu-buttons"
        >
          <GiAmericanFootballHelmet className="archon-menu-icon" />
          Schedule Match
        </NavLink>
      </div>
      <div className="row-padding-800"></div>
      <div className="all-match-list-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1].map(() => (
          <EachMatchList />
        ))}
      </div>
    </div>
  );
}

export default ListingMatch