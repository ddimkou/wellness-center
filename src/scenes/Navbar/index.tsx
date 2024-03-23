import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens =useMediaQuery("(min-width:1060px)")
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" className="w-20 h-auto" />
            {/* right side */}

            {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
              {/* links */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              {/* sign-in */}
              <div className={`${flexBetween} gap-8 `}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Reservation</ActionButton>
              </div>
            </div>) :
            // mobile screen
             (
             <button className="rounded-full bg-cyan" onClick={()=>setIsMenuToggled(!isMenuToggled)}>
              <Bars3Icon className="h-7 w-7 p-1 text-white"/>
             </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
