import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import routingPic from '../../public/images/routing.jpg';
import prerenderingPic from '../../public/images/prerendering.jpg';
import { motion, useMotionValue } from 'framer-motion';
import filebasedmetadataPic from '../../public/images/filebasedmetadata.jpg';
import colorpalettePic from '../../public/images/colorpalette.jpg';
import mdxPic from '../../public/images/mdx.jpg';
import protocolPic from '../../public/images/protocol.png';
import turbopackPic from '../../public/images/turbopack.jpg';
import dynamicbreakpointsPic from '../../public/images/dynamicbreakpoints.jpg';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouse = (event) => {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  };

  const handleMouseLeave = () => {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>ProphetGaming | Articles</title>
        <meta name="description" content="Articles" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Just What You Needed!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="File based routing"
              summary="File based routing (page based routing mechanism) is the feature provided by Next JS inorder to not install any third party packages and avoid configurations. The files and folders created inside pages folder is associated with routes based on file and folder name. So we can create routes as we want by mix and matching the folder and file names."
              time="5 min read"
              link="https://nextjs.org/docs/routing/introduction"
              img={routingPic}
            />
            <FeaturedArticle
              title="Pre-rendering"
              summary="Pre-rendering is the most powerful feature where the HTML for every pages in Next JS app are generated in advance with all the neccessary content. So if user requests for a page, server will serve the already generated HTML within milliseconds. This provides better performance. Next JS also contributes for SEO as the search engine finds easy to search for keywords when the HTML is fully generated by server and metadata are available for it to crawl and index in better rankings."
              time="10 min read"
              link="https://nextjs.org/learn/basics/data-fetching"
              img={prerenderingPic}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="File-Based Metadata API: Allowing us to define metadata"
              date="April 7, 2023"
              link="https://nextjs.org/blog/next-13-3#file-based-metadata-api"
              img={filebasedmetadataPic}
            />
            <Article
              title="Tailwind CSS v3.3: Extended color palette, ESM/TS support, logical properties, and more"
              date="March 28, 2023"
              link="https://tailwindcss.com/blog/tailwindcss-v3-3"
              img={colorpalettePic}
            />
            <Article
              title="MDX for Server Components: Write JSX directly in your markdown files"
              date="February 24, 2023"
              link="https://nextjs.org/blog/next-13-2#mdx-for-server-components"
              img={mdxPic}
            />
            <Article
              title="Protocol: A beautiful starting point for your next API documentation site"
              date="December 15, 2022"
              link="https://tailwindcss.com/blog/2022-12-15-protocol-api-documentation-template"
              img={protocolPic}
            />
            <Article
              title="Introducing Turbopack (Alpha): the new Rust-based successor to Webpack"
              date="October 26, 2022"
              link="https://nextjs.org/blog/next-13#introducing-turbopack-alpha"
              img={turbopackPic}
            />
            <Article
              title="Tailwind CSS v3.2: Dynamic breakpoints, multi-config, and container queries, oh my!"
              date="October 19, 2022"
              link="https://tailwindcss.com/blog/tailwindcss-v3-2"
              img={dynamicbreakpointsPic}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
