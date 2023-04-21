import React from 'react';
import Layout from './Layout';
import { motion } from 'framer-motion';
import { DiscordIconBNW, FacebookIconBNW, GithubIconBNW } from './Icons';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between !bg-black">
        <span className="text-white">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.facebook.com/propetagaming"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <FacebookIconBNW />
          </motion.a>
          <motion.a
            href="https://discords.com/servers/700876309194080298"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <DiscordIconBNW />
          </motion.a>
          <motion.a
            href="https://github.com/Audiph"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <GithubIconBNW />
          </motion.a>
        </nav>
      </Layout>
    </footer>
  );
};

export default Footer;
