import { motion } from "framer-motion";

// Define the Props type
type Props = {
  text: string;
  fontColor?: string;  // Optional prop for font color
  textSize?: string; 
  backgroundColor?:string;  // Optional prop for text size
};

const Text = ({ text, fontColor = "black", textSize = "text-4xl" }: Props) => {
  return (
    <motion.a
      className={`relative block overflow-hidden whitespace-nowrap uppercase items-start ${textSize}`}
      whileHover="hover"
      initial="initial"
      style={{ color: fontColor }} // Apply font color dynamically
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hover: { y: "-200%" },
        }}
      >
        {text}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: "200%" },
          hover: { y: 0 },
        }}
      >
        {text}
      </motion.div>
    </motion.a>
  );
};

const SliceText = ({ text, fontColor, textSize,backgroundColor }: Props) => {
  return (
    <section className={`grid gap-2 place-content-center font-bold ${backgroundColor}`}>
      <Text text={text} fontColor={fontColor} textSize={textSize} />
    </section>
  );
};

export default SliceText;
