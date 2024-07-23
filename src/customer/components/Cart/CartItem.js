import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";

export default function CartItem() {
  return (
    <div className="p-5 shadow-md border rounded-md space-y-4">
      {/* //TODO: Image and details */}
      <div className="flex items-center">
        <div className="w-[7rem] h-[7rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold text-[0.8rem] md:text-[1rem]">
            Men Slim Mid Rise Black Jeans{" "}
          </p>
          <p className="opacity-70 text-[0.8rem] md:text-[1rem]">
            Size: L,White
          </p>
          <p className="opacity-70 mt-2 text-[0.8rem] md:text-[1rem]">
            Seller: Crishtaliyo 2fashion
          </p>
          <div className="flex space-x-3 lg:space-x-5 items-center  text-gray-900 pt-4">
            <p className="font-semibold text-[0.8rem] md:text-[1rem]">₹199</p>
            <p className="line-through opacity-50 text-[0.8rem] md:text-[1rem]">
              ₹211
            </p>
            <p className="text-green-600 font-semibold text-[0.8rem] md:text-[1rem]">
              5% Off
            </p>
          </div>
        </div>
      </div>

      {/* //TODO: Remove & Add button */}
      <div className="flex items-center space-x-3 lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <RemoveCircleOutline />
          </IconButton>

          <span className="py-1 px-5 md:px-7 border rounded-sm"> 3</span>

          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutline />
          </IconButton>
        </div>

        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>remove</Button>
        </div>
      </div>
    </div>
  );
}
