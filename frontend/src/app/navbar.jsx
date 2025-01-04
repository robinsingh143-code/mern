'use client'
import React from 'react'
import Link from 'next/link'
import useAppContext from '@/context/appContext'

const Navbar = () => {

  const { loggedIn, logout } = useAppContext();

  return (
    <div>
      <>
        {/* ========== HEADER ========== */}
        <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
          <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center gap-x-1">
              <Link
                className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
                href="/"
                aria-label="Brand"
              >
                Brand
              </Link>
            </div>
            {/* Collapse */}
            <div
              id="hs-header-base"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
              aria-labelledby="hs-header-base-collapse"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                  <div className="grow">
                    <div className="flex flex-col md:flex-row  md:items-center gap-0.5 md:gap-1">
                      <Link
                        className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                        href="/eventHandling"
                        aria-current="page"
                      >
                        Event Handling
                      </Link>
                      <Link
                        className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                        href="/counterexample"
                        aria-current="page"
                      >
                        Counter
                      </Link>
                      <Link
                        className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                        href="/addproduct"
                        aria-current="page"
                      >
                        Add Product
                      </Link>
                      <Link
                        className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                        href="/manageproduct"
                        aria-current="page"
                      >
                        Manage Prod
                      </Link>
                      <Link
                        className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                        href="/todo"
                        aria-current="page"
                      >
                        Todo
                      </Link>
                    </div>
                  </div>
                  {/* Button Group */}
                  {loggedIn ? (
                    <div className="md:ms-auto mt-2 md:mt-0 flex flex-wrap items-center gap-x-1.5">
                      <button
                        className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="md:ms-auto mt-2 md:mt-0 flex flex-wrap items-center gap-x-1.5">
                      <Link
                        className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100"
                        href="/login"
                      >
                        Sign in
                      </Link>
                      <Link
                        className="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        href="/signup"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* End Collapse */}
          </nav>
        </header>
        {/* ========== END HEADER ========== */}
      </>

    </div>
  )
}

export default Navbar
