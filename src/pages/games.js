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

const FeaturedGame = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
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
      <main className="w-full mb-16 flex flex-column items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Games leaves the rest behind!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedGame
                title="Dota 2"
                summary="Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be – start defending your ancient now."
                link="https://www.dota2.com/home"
                type="MOBA"
                img={dotaPic}
              />
            </div>
            <div className="col-span-6">
              <Game
                title="Rust"
                link="https://rust.facepunch.com/"
                type="Survival"
                img={rustPic}
              />
            </div>
            <div className="col-span-6">
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
            <div className="col-span-6">
              <Game
                title="PUBG: Battlegrounds"
                link="https://pubg.com"
                type="Battle Royale"
                img={pubgPic}
              />
            </div>
            <div className="col-span-6">
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