import { useState } from "react";

function Menu() {
  const [showOptions, setShowOPtions] = useState(false);
  const handleClick = () =>{
    setShowOPtions(!showOptions)
  }
  return (
    <div class="items-center justify-center text-center">
      <div class="relative inline-block text-left">
        <div>
          <button
          onClick={handleClick}
            type="button"
            class="inline-flex w-full justify-center outline-none text-[10px] md:text-[20px] gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900  duration-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Category
            <svg
              class="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="">
{showOptions &&(
        <div
          class="absolute  lg:-right-[290px]  -right-[124px] mt-7 mb-72 md:w-[503px] w-[300px]  rounded-b-md bg-white border border-t-transparent shadow-md focus:outline-none pl-9 md:pl-[54px] "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          
          <div class="py-1 border md:w-[183px] w-[129px]" role="none">
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Account 
            </a>
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              License
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>)}
        </div>
      </div>
    </div>
  );
}

export default Menu;
