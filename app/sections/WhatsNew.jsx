'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../../utils/motion';


export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'Deep studies Strategies',
    subtitle:
        'We have deep studies on the strategies that are suitable for you',
  },
  {
    imgUrl: '/headset.svg',
    title: 'BackTested Strategy',
    subtitle:
        'Tested and backtested strategies that are suitable for you',
  },
  {
    imgUrl: '/headset.svg',
    title: 'Paper Trading',
    subtitle:
        'Paper trading to get you started without any risk.',
  },
];
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>What's new about AlgoBot?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
