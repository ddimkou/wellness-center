import { SelectedPage, ServiceType } from "@/shared/types";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Service from "./Service";

const images: Array<ServiceType> = [
  {
    name: "Swedish Massage",
    image: img1,
  },
  {
    name: "Deep Tissue Massage",
    image: img2,
  },
  {
    name: "Sports Massage",
    image: img3,
  },
  {
    name: "Reflexology",
    image: img4,
  },
  {
    name: "Hot Stone Massage",
    image: img5,
  },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Services</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              inventore error aut ex, adipisci laborum explicabo, soluta eveniet
              maxime ipsam hic. Quo hic ipsa magnam?
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {images.map((item: ServiceType, index) => (
              <Service
                key={`${item.name}-${index}`}
                name={item.name}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
