import { ClasseType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import Class from "./Class";

const classes: Array<ClasseType> = [
  {
    name: "Weight Training Classes.",
    description:
      "Build strength, increase muscle definition, and boost endurance with our expert-led weight training classes. Designed for all fitness levels, these sessions focus on proper technique, progressive overload, and full-body conditioning to help you achieve your strength goals safely and effectively. Whether you're a beginner or an experienced lifter, our trainers will guide you every step of the way!",
    image: image1,
  },
  {
    name: "Training Classes.",
    description:
      "Build strength, increase muscle definition, and boost endurance with our expert-led weight training classes. Designed for all fitness levels, these sessions focus on proper technique, progressive overload, and full-body conditioning to help you achieve your strength goals safely and effectively. Whether you're a beginner or an experienced lifter, our trainers will guide you every step of the way!",
    image: image2,
  },
  {
    name: "Adventure Classes.",
    description:
      "Build strength, increase muscle definition, and boost endurance with our expert-led weight training classes. Designed for all fitness levels, these sessions focus on proper technique, progressive overload, and full-body conditioning to help you achieve your strength goals safely and effectively. Whether you're a beginner or an experienced lifter, our trainers will guide you every step of the way!",
    image: image3,
  },
  {
    name: "Fitness Classes.",
    description:
      "Build strength, increase muscle definition, and boost endurance with our expert-led weight training classes. Designed for all fitness levels, these sessions focus on proper technique, progressive overload, and full-body conditioning to help you achieve your strength goals safely and effectively. Whether you're a beginner or an experienced lifter, our trainers will guide you every step of the way!",
    image: image4,
  },
  {
    name: "Ab Core Classes.",
    description:
      "Build strength, increase muscle definition, and boost endurance with our expert-led weight training classes. Designed for all fitness levels, these sessions focus on proper technique, progressive overload, and full-body conditioning to help you achieve your strength goals safely and effectively. Whether you're a beginner or an experienced lifter, our trainers will guide you every step of the way!",
    image: image5,
  },
  {
    name: "Yoga Classes.",
    description:
      "Build strength, increase muscle definition, and boost endurance with our expert-led weight training classes. Designed for all fitness levels, these sessions focus on proper technique, progressive overload, and full-body conditioning to help you achieve your strength goals safely and effectively. Whether you're a beginner or an experienced lifter, our trainers will guide you every step of the way!",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
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
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HeaderText>OUR CLASSES</HeaderText>
            <p className="py-5">
              Step into a world of high-energy workouts, expert-led sessions,
              and a supportive community that keeps you motivated. Our diverse
              range of classes caters to all fitness levels, from strength
              training and HIIT to yoga and spin. Whether you're looking to
              build muscle, improve flexibility, or burn calories, our certified
              trainers are here to guide you every step of the way. Join us and
              experience fun, challenging workouts designed to help you achieve
              your fitness goals while staying engaged and inspired!
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClasseType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
