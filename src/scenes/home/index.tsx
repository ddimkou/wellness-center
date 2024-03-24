import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import banner from "@/assets/banner.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
ActionButton;
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* tag & main header */}
      <div>
        {/* main header */}
        <div>
          {/* headings */}
          <div>
            <div>
              <div>
                <img src={banner} alt="Wellness Center Banner" />
              </div>
            </div>
            <p>
              We believe in the holistic approach to wellness, integrating mind
              and body practices that extend beyond the massage table. Our
              commitment to your wellbeing is our utmost priority, making the
              Wellness Center not just a retreat, but a pivotal part of your
              wellness journey.
            </p>
          </div>
          {/* ACTIONS */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              JOIN NOW
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* image */}
        <div></div>
      </div>
    </section>
  );
};

export default Home;
