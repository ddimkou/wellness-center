import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import banner from "@/assets/banner.png";
import eqBanner2 from "@/assets/eqBanner2.png";
import spons1 from "@/assets/spons1.png";
import spons2 from "@/assets/spons2.png";
import spons3 from "@/assets/spons3.png";
import { motion } from "framer-motion";

ActionButton;
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* image & main header */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <img src={banner} alt="Wellness Center Banner" />
            </div>

            <p className="mt-8 text-sm">
              We believe in the holistic approach to wellness, integrating mind
              and body practices that extend beyond the massage table. Our
              commitment to your wellbeing is our utmost priority, making the
              Wellness Center not just a retreat, but a pivotal part of your
              wellness journey.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
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
          </motion.div>
        </div>

        {/* image */}
        <div className="flex basis-3/5 justify-center mt-12 md:ml-40 md:mt-16 md:justify-items-end ">
          <img
            src={eqBanner2}
            alt="home-pageGraphic"
            className="w-[20rem] h-[20rem] "
          />
        </div>
      </motion.div>

      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-full items-center justify-between gap-8 ">
              <img src={spons1} alt="spons1" className="h-[60px] w-auto" />
              <img src={spons2} alt="spons2" className="h-[60px] w-auto" />
              <img src={spons3} alt="spons3" className="h-[60px] w-auto" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
