'use client';

import { motion } from 'framer-motion';
import styles from '../../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Exchanges around the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Supported Exchanges around the World
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[69px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute top-[32%] left-[62%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/exchange-1.png" alt="people" className="w-full h-full" />
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
