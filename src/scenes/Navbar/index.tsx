import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
// type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" className="w-20 h-auto" />
            {/* right side */}

            <div className={`${flexBetween} w-full`}>
              {/* links */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Contact us</p>
              </div>
              {/* sign-in */}
              <div className={`${flexBetween} gap-8 `}>
                <p>Sign In</p>
                <button>Reservation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
