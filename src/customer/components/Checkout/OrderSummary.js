import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, Divider } from "@mui/material";
import CartItem from "../Cart/CartItem";
export default function OrderSummary() {
  return (
    <div className="mt-[2rem] lg:mt-[3.5rem]">
      {/* Address */}
      <div className="p-5 bg-white shadow-md  rounded-s-md border">
        <AddressCard />
      </div>

      {/* Orders Code */}
      <div>
        <div className="lg:grid grid-cols-3 relative mt-4 lg:mt-8 lg:space-x-5">
          <div className="col-span-2 space-y-4  lg:px-0">
            {[1, 1, 1, 1].map((item) => (
              <CartItem />
            ))}
          </div>

          <div className="sticky top-5 h-[100vh] mt-5 lg:mt-0">
            <div className="border bg-white shadow-md p-5">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price details
              </p>

              <Divider />

              <div className="space-y-2 font-semibold ">
                <div className="flex justify-between pt-3">
                  <span>Price</span>
                  <span> ₹4697</span>
                </div>

                <div className="flex justify-between pt-3">
                  <span>Discount</span>
                  <span className="text-green-600"> -₹3419</span>
                </div>

                <div className="flex justify-between pt-3 mb-1">
                  <span>Delivery Charges</span>
                  <span className="text-green-600"> Free</span>
                </div>
                <Divider />
                <div className="flex justify-between pt-3">
                  <span>Total Amount</span>
                  <span className="text-green-600"> ₹1278</span>
                </div>
              </div>

              <Button
                variant="contained"
                className="w-full styledButton"
                sx={{
                  px: "1.2rem",
                  py: "0.5rem",
                  mt: "2rem",
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
