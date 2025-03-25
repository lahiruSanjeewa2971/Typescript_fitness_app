import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenifitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";

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
        <div className="md:my-5 md:w-3/5">
          <HeaderText>MORE THAN A GYM</HeaderText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            cate into each and every member.
          </p>
        </div>

        {/* benifits */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {/* {benifits.map((binifit) => (
            <Benifit />
          ))} */}
        </div>
      </motion.div>
    </section>
  );
};

export default Benifits;
