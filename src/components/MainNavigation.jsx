import React from 'react'

const MainNavigation = () => {
  return (
    <header className="
      flex items-center justify-between p-4 rounded-2xl
      backdrop-blur-xl
      border border-white/20
      text-white
      shadow-[0_8px_30px_rgb(0,0,0,0.12)]
      bg-black/30
      m-4
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

      <p>Cart: 0 items</p>
    </header>
  )
}

export default MainNavigation
