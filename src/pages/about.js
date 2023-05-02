import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import prophetPhoto from '../../public/images/propetagaming.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Games from '@/components/Games';
import Founders from '@/components/Founders';
import Moderators from '@/components/Moderators';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView && motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>ProphetGaming | About</title>
        <meta name="description" content="About Prophet Gaming" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Feel it - Who are we?"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About&nbsp;Us
              </h2>
              <p className="font-medium">
                Hi, we are the Prophet Gaming, a gaming community with a passion
                for playing video games and gaming culture. With&nbsp;
                {new Date().getFullYear() - 2020}+ years active in the gaming
                community. We started as a bunch of college students who love to
                play video games and troll around our enemies in-game. We
                welcome everyone who wants to be a part of our growing
                community.
              </p>
              <p className="my-4 font-medium">
                We believe that every age has its storytelling form, and video
                gaming is a huge part of our culture. You can ignore or embrace
                video games and imbue them with the best artistic quality.
                People are enthralled with video games in the same way as other
                people love the cinema or theatre.
              </p>
              <p className="font-medium">
                Whether the game is a MOBA, FPS, Survival, Horror, or Battle
                Royale, we bring enjoyment and excitement to each one of our
                members. We look forward to anyone who will join our community.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={prophetPhoto}
                alt="Prophet Image"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Average Active Members
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={250} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Total Members
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={new Date().getFullYear() - 2020} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years Active
                </h2>
              </div>
            </div>
          </div>
          <Games />
          <Founders />
          <Moderators />
        </Layout>
      </main>
    </>
  );
};

export default about;
