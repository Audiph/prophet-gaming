import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dotaPic from '../../public/images/dota2.jpg';
import rustPic from '../../public/images/rust.jpg';
import valorantPic from '../../public/images/valorant.jpg';
import outlasttrialsPic from '../../public/images/outlasttrials.jpg';
import pubgPic from '../../public/images/pubg.jpg';
import amongusPic from '../../public/images/amongus.jpg';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedGame = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit&nbsp;Game
          </Link>
        </div>
      </div>
    </article>
  );
};

const Game = ({ title, type, img, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="mt-2">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const games = () => {
  return (
    <>
      <Head>
        <title>ProphetGaming | Games</title>
        <meta name="description" content="Games" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-column items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Games leaves the rest behind!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedGame
                title="Dota 2"
                summary="Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be – start defending your ancient now."
                link="https://www.dota2.com/home"
                type="MOBA"
                img={dotaPic}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Game
                title="Rust"
                link="https://rust.facepunch.com/"
                type="Survival"
                img={rustPic}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Game
                title="The Outlast Trials"
                link="https://redbarrelsgames.com/games/the-outlast-trials/"
                type="Horror Co-op"
                img={outlasttrialsPic}
              />
            </div>
            <div className="col-span-12">
              <FeaturedGame
                title="Valorant"
                summary="Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush."
                link="https://playvalorant.com"
                type="FPS"
                img={valorantPic}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Game
                title="PUBG: Battlegrounds"
                link="https://pubg.com"
                type="Battle Royale"
                img={pubgPic}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Game
                title="Among Us"
                link="https://www.innersloth.com/games/among-us/"
                type="Social Deduction"
                img={amongusPic}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default games;
