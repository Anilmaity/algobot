'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import styles from '../../styles';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../../utils/motion';

export const exploreWorlds = [
    {
        id: 'world-1',
        imgUrl: '/s1.png',
        title: 'The Trend Rider',
    },
    {
        id: 'world-2',
        imgUrl: '/s2.png',
        title: 'The Scalper',
    },
    {
        id: 'world-3',
        imgUrl: '/s3.png',
        title: 'Simple and Safe',
    },
    {
        id: 'world-4',
        imgUrl: '/s4.png',
        title: 'Al Driver',
    },

];
const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Strategy" textStyles="text-center" />
        <TitleText title={<>Choose the Strategies you want <br className="md:block hidden " />to Deploy</>} textStyles="text-center" />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
