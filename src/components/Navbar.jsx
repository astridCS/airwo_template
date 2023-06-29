import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme, ThemeProvider } from "next-themes";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useRouter } from "next/router";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [token, setToken] = useState(null);
  const [themeLogo, setThemeLogo] = useState(null);
  const [user, setUser] = useState(null);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setThemeLogo(theme === "dark" ? <IoMdSunny /> : <IoMdMoon />);
  }, [theme]);

  const handleToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    router.push("/");
  };

  return (
    <header className="flex items-center justify-between w-full max-w-4xl px-4 py-8 mx-auto  ">
      
      <Link href="/" className="text-3xl font-bold text-slate-900 dark:text-slate-200 ">
      <span
          className={`text-3xl font-bold text-slate-900 dark:text-slate-200 ${
            theme === "dark" 
          }`}
        >
          Airwo<span className="font-bold text-orange-600">As</span>
        </span>
        {/* Airwo<span className="font-bold text-orange-600">As</span> */}
      </Link> 
      <div className="flex items-center gap-4">
        <div
          onClick={handleToggle}
          className="p-1 text-slate-500 dark:text-gray-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
        >
          {themeLogo}
        </div>
        {token ? (
          <>
            <Link href="/me">
              <div className="flex items-center gap-1 dark:hover:bg-slate-500 hover:bg-slate-200 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 font-bold text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="flex ml-2 font-bold text-blue-500 dark:text-slate-100">
                  {user.name}
                </span>
              </div>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
            >
              <FiLogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </>
        ) : (
          <Link href="/auth/login">
            <span className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
              <FiLogIn className="w-4 h-4 mr-2" />
              Login
            </span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
