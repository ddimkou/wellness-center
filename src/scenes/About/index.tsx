import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
// import SparklesImage from "@/assets/Sparkles.png";
import massageImg from "@/assets/massageImg.png";

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Our clients",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert Team",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A MASSAGE CENTER</HText>
          <p className="my-5 text-sm">
            Welcome to Wellness Center, where we make relaxation simple. Our
            friendly team is here to help you feel better with comforting
            massages in a peaceful place. Come take a break and let us take care
            of you.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className=" items-center justify-between gap-20 md:mt-28 md:flex  ">
          {/* graphic */}
          <img
            src={massageImg}
            alt="about-page-graphics"
            className="my-16 mx-auto h-[250px] "
          />
          {/* description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText> MILLIONS OF HAPPY CUSTOMERS</HText>
                </motion.div>
              </div>
            </div>

            {/* description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                dolorum est iure debitis in tenetur! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Enim, consequuntur exercitationem
                voluptatem deleniti nostrum dolorum! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Animi minima, possimus quas nulla
                aliquam fugiat.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus beatae repudiandae omnis, eligendi numquam quaerat vitae
                voluptates? Exercitationem incidunt doloremque mollitia ex.
              </p>
            </motion.div>
            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
              <ActionButton setSelectedPage={setSelectedPage}>
                JOIN NOW
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
