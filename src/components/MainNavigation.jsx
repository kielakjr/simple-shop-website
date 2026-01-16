import React from 'react'
import Tile from './ui/Tile'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Tile className="
      flex items-center justify-between
    ">
      <h1 className="font-semibold text-lg">Simple Shop</h1>
      <input
        type="search"
        placeholder="Search products..."
        className="
          px-3 py-1.5 rounded-md
          bg-white/30 text-white placeholder-white/70
          outline-none
          focus:ring-2 focus:ring-white/50
          border border-white/20
          backdrop-blur-md
          shadow-[0_4px_15px_rgb(0,0,0,0.1)]
          transition-all duration-200
          w-96
        "
      />

      {!isAuthenticated ? (
        <NavLink to="/login" className="
          px-4 py-2
          bg-white/20 text-white
          rounded-md
          hover:bg-white/30
          transition-colors duration-200
        cursor-pointer
      "
      >
        Log In
      </NavLink>) : (
        <button className="
          px-4 py-2
          bg-white/20 text-white
          rounded-md
          hover:bg-white/30
          transition-colors duration-200
        cursor-pointer
      "
        onClick={() => dispatch(authActions.logout())}
      >
        Log Out
      </button>
      )}
    </Tile>
  )
}

export default MainNavigation
