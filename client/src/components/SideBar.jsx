import { useState } from "react";
import { Link } from "react-router-dom";
const SideBar = () => {

  const [open, setOpen] = useState(true);

  return (
    <div className="flex sticky top-20 ">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >

        {/* <img
          src="./src/assets/control.png"

          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}
        {/* <svg className={`h-6 w-6 text-blue-500 absolute cursor-pointer -right-3 top-9  border-dark-purple
          rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg> */}
        <div className="flex gap-x-4 items-center">
          <img onClick={() => setOpen(!open)}
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"

              }`}
          />
          {/* <svg className={`cursor-pointer  duration-500 h-8 w-8 text-blue-500 ${
              open && "rotate-[360deg]"
            }`}   fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
</svg> */}
          <h1
            className={` origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Dashboard
          </h1>
        </div>
        <ul className="pt-6">

          {/* <Link >
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4" >
              <img src="./src/assets/Chart_fill.png" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </li>
            </Link> */}
          <Link >
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4" >
              <img src="./src/assets/Chart.png" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Products
              </span>
            </li>
          </Link>
          <Link to={'/admin/users'} >
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4" >
              <img src="./src/assets/User.png" />
              {/* <svg class="h-6 w-6 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="9" cy="7" r="4" />  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />  <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Users
              </span>
            </li>
          </Link>

        </ul>
      </div>

    </div>
  )
}

export default SideBar
