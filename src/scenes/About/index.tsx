import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";

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

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        {/* Header */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A MASSAGE CENTER</HText>
          <p className="my-5 text-sm">
            Welcome to Wellness Center, where we make relaxation simple. Our
            friendly team is here to help you feel better with comforting
            massages in a peaceful place. Come take a break and let us take care
            of you.
          </p>
        </div>
        {/* Benefits */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
