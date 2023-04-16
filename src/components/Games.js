import React from 'react';
import { motion } from 'framer-motion';

const Game = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Games = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Games</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <Game name="" x="" y="" />
        <Game name="Dota 2" />
        <Game name="CSGO" x="-20vw" y="2vw" />
        <Game name="Valorant" x="-5vw" y="-10vw" />
        <Game name="Rust" x="20vw" y="6vw" />
        <Game name="Phasmophobia" x="0vw" y="12vw" />
        <Game name="Among Us" x="-20vw" y="-15vw" />
        <Game name="PUBG" x="15vw" y="-12vw" />
        <Game name="Outlast Trials" x="32vw" y="-5vw" />
        <Game name="Left 4 Dead" x="0vw" y="-20vw" />
        <Game name="Back 4 Blood" x="-27vw" y="-6vw" />
        <Game name="Sons of the Forest" x="32vw" y="15vw" />
        <Game name="Dying Light" x="-18vw" y="14vw" />
        <Game name="Tom Clancy" x="18vw" y="-23vw" />
      </div>
    </>
  );
};

export default Games;
