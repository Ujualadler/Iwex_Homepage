import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

function Navbar({WIDTH,show}) {
  return (
    <div className={`${WIDTH?'sm:w-[25%] w-full ':' w-0'} overflow-hidden fixed transition-all duration-700  z-30 top-0 left-0  bg-black h-screen`}>
       <div className="flex justify-end p-1 ">
       <IconButton onClick={()=>show(false)} color="error">
            <CloseIcon
              className="text-white mt-1 hover:text-purple-900  rounded-full hover:-scale-y-110"
              fontSize="large"
            />
          </IconButton>
       </div>
      <div className=" bg-black h-screen flex flex-col  justify-center ">
    
        <ul className=" flex flex-col items-center   bg-black p-4  text-white font-semibold text-3xl">
         <div>
         <li className="mb-6  hover:text-purple-900">Home</li>
          <li className="mb-6 hover:text-purple-900">About Us</li>
          <li className="mb-6 hover:text-purple-900">Products</li>
          <li className="mb-6 hover:text-purple-900">Services</li>
          <li className="mb-6 hover:text-purple-900">Contact Us</li>
         </div>
          <div className="mt-20 flex items-center">
            <button className="">Login</button>
            <IconButton>
              <LoginIcon className="text-white mt-1 hover:scale-x-125 hover:text-purple-900" fontSize="large" />
            </IconButton>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
