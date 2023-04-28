import React from 'react';
import Layout from './Layout';
import { motion } from 'framer-motion';
import { DiscordIconBNW, FacebookIconBNW, GithubIconBNW } from './Icons';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between !bg-dark dark:!bg-light lg:flex-col lg:py-6">
        <span className="text-white dark:text-black">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <nav className="flex items-center justify-center flex-wrap lg:py-2">
          <motion.a
            href="https://www.facebook.com/propetagaming"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <FacebookIconBNW
              className="lg:w-5"
              strokeColor="stroke-white dark:stroke-black"
            />
          </motion.a>
          <motion.a
            href="https://discords.com/servers/700876309194080298"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <DiscordIconBNW
              className="lg:w-5"
              strokeColor="fill-white dark:fill-black"
            />
          </motion.a>
          <motion.a
            href="https://github.com/Audiph"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <GithubIconBNW
              className="lg:w-5"
              strokeColor="fill-white dark:fill-black"
            />
          </motion.a>
        </nav>
      </Layout>
    </footer>
  );
};

export default Footer;
