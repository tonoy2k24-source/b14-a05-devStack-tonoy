import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
       
          <nav className="border-b border-gray-100 bg-white">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">

    <img
      src={Logo}
      alt=""
      className="w-32"
    />

    <ul className="flex gap-8 items-center text-sm text-gray-600">
      <li className="text-pink-500 font-medium cursor-pointer">
        Home
      </li>

      <li className="hover:text-pink-500 transition cursor-pointer">
        Technologies
      </li>

      <li className="hover:text-pink-500 transition cursor-pointer">
        Projects
      </li>

      <li className="hover:text-pink-500 transition cursor-pointer">
        About
      </li>

      <li className="hover:text-pink-500 transition cursor-pointer">
        Contact
      </li>
    </ul>

    <div className="flex items-center gap-5">
      <button className="text-sm text-gray-700 hover:text-pink-500 transition cursor-pointer">
        Sign In
      </button>

      <button className="bg-pink-500 text-white text-sm px-5 py-2 rounded-full hover:bg-pink-600 transition cursor-pointer">
        Sign Up
      </button>
    </div>

  </div>
</nav> 
        
    );
};

export default Nav;