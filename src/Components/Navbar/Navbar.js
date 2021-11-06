import React, {Fragment, useState} from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {

        const [isOpen, setIsOpen] = useState(false);

    return(
        <Fragment>
            <div className="flex items-center justify-between z-10">

                <button className="p-2 absolute left-4 z-10 mt-10" onClick={()=>setIsOpen(!isOpen)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current text-gray-800"
                    >
                        <rect width="352" height="32" x="80" y="96"></rect>
                        <rect width="352" height="32" x="80" y="240"></rect>
                        <rect width="352" height="32" x="80" y="384"></rect>
                    </svg>
                </button>
            </div>
            <div className={`flex flex-col h-full p-3 w-60
         ${ isOpen ? " animate__animated animate__slideInLeft" : "animate__animated animate__slideOutLeft"}
           bg-white absolute text-gray-800`}>
                <div className="space-y-3 my-10  ">

                    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center py-4">
        <button
            type="submit"
            className="p-2 focus:outline-none focus:shadow-outline"
        >
          <svg
              fill="currentColor"
              viewBox="0 0 512 512"
              className="w-5 h-5 text-gray-600"
          >
            <path
                d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
            ></path>
          </svg>
        </button>
      </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="
          w-full
          py-2
          pl-10
          text-sm
          border-transparent
          rounded-md
          focus:outline-none
          bg-gray-100
          text-gray-800
          focus:bg-gray-50
        "
                        />
                    </div>

                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <NavLink exact to="/" className="flex items-center p-2 space-x-3 rounded-md" activeClassName="bg-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                    <span>Form</span>
                                </NavLink>
                            </li>
                            <li className="rounded-sm">
                                <NavLink to="/user" className="flex items-center p-2 space-x-3 rounded-md" activeClassName="bg-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>User</span>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </Fragment>

    )
}

export default Navbar;