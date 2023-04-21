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
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="About the Prophet Gaming" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About&nbsp;Us
              </h2>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
                aliquet nibh praesent tristique magna sit amet purus. Ante in
                nibh mauris cursus mattis. Enim tortor at auctor urna nunc id
                cursus. Dictum sit amet justo donec enim diam. Platea dictumst
                quisque sagittis purus sit.
              </p>
              <p className="my-4 font-medium">
                Volutpat ac tincidunt vitae semper quis lectus nulla at. Sapien
                eget mi proin sed libero enim sed faucibus. Condimentum id
                venenatis a condimentum vitae sapien. Ut sem nulla pharetra
                diam. Ac ut consequat semper viverra nam libero justo. Dui
                accumsan sit amet nulla facilisi morbi. Nullam non nisi est sit
                amet facilisis magna etiam. A diam sollicitudin tempor id eu
                nisl.
              </p>
              <p className="font-medium">
                Velit dignissim sodales ut eu sem integer. Suspendisse sed nisi
                lacus sed viverra tellus. Eget mi proin sed libero enim. Blandit
                libero volutpat sed cras ornare arcu dui. Enim nunc faucibus a
                pellentesque sit amet porttitor. Nulla malesuada pellentesque
                elit eget. Magna fermentum iaculis eu non diam phasellus
                vestibulum lorem.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={prophetPhoto}
                alt="Prophet Image"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Average Active Members
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={250} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Total Members
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={new Date().getFullYear() - 2020} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
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
