import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenifitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import Benifit from "./Benifit";
import ActionButton from "@/shared/ActionButton";
import BenifitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const benifits: Array<BenifitType> = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: "State of the Art Facilities.",
    description:
      "Experience world-class equipment, modern workout spaces, and cutting-edge technology designed to elevate your fitness journey. Every detail is crafted for comfort, performance, and results.",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "100's of Diverse Classes.",
    description:
      "From strength training and HIIT to yoga and dance, explore hundreds of classes tailored for all fitness levels — keeping every workout fresh, exciting, and challenging.",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: "Experts and Pro Trainers.",
    description:
      "Train with certified professionals dedicated to guiding, motivating, and helping you achieve your fitness goals with personalized support and expert knowledge.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benifits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benifits" className="mx-auto min-h-screen w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HeaderText>MORE THAN A GYM</HeaderText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            cate into each and every member.
          </p>
        </motion.div>

        {/* benifits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-center justify-between gap-8 mt-5"
        >
          {benifits.map((benifit: BenifitType) => (
            <Benifit
              key={benifit.title}
              icon={benifit.icon}
              title={benifit.title}
              description={benifit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benifits-page-graphics"
            src={BenifitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
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
                  <HeaderText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HeaderText>
                </motion.div>
              </div>
            </div>

            {/* DES */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                At our gym, we believe fitness is not just a routine — it's a
                lifestyle. With state-of-the-art equipment, world-class
                trainers, and a vibrant, supportive community, we help millions
                of members achieve their goals every single day. Whether you're
                just starting out or taking your fitness to the next level, our
                personalized programs and motivating atmosphere make every
                workout enjoyable and effective.
              </p>
              <p className="mb-5">
                Join a growing family of fitness enthusiasts who inspire and
                uplift each other. From strength training and cardio to yoga and
                group classes, we offer something for everyone. Your journey
                toward a healthier, stronger, and happier you starts here — and
                you’ll never have to walk it alone!
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benifits;
