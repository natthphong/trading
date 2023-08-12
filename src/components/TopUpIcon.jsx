import { CurrencyDollarIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

export default function TopUpIcon({topUpFunc}) {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    return (
        <button
          onClick={topUpFunc}
          className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-64 shadow-lg transition duration-300 hover:scale-125 ${
            darkMode ? "shadow-gray-800" : null
          }`}
        >
          <CurrencyDollarIcon
            className={`h-8 w-8 cursor-pointer stroke-1 ${
              darkMode
                ? "fill-yellow-400 stroke-yellow-400"
                : "fill-none stroke-neutral-400"
            }`}
          />
        </button>
      );
}
