import { motion } from "framer-motion";

type Props = {
  text: string;
  fontColor?: string; 
  textSize?: string;  
  backgroundColor?: string; 
};

const Text = ({ text, fontColor = "black", textSize = "text-4xl" }: Props) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;
  
  return (
    <motion.a
      className={`relative block overflow-hidden whitespace-nowrap font-black uppercase lg:${textSize}`}
      style={{ color: fontColor }} 
      whileHover="hover"
      initial="initial"
    >
      <div className="relative">
        {text.split("").map((t, i) => (
          <motion.span
            className="inline-block"
            key={`top-${i}`} 
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {t}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((t, i) => (
          <motion.span
            className="inline-block"
            key={`bottom-${i}`} 
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i, 
            }}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const SliceTextIndividual = ({ text, fontColor, textSize, backgroundColor = "bg-teal-300" }: Props) => {
  return (
    <section className={`grid gap-2 place-content-center font-bold ${backgroundColor}`}>
      <Text text={text} fontColor={fontColor} textSize={textSize} />
    </section>
  );
};

export default SliceTextIndividual;
