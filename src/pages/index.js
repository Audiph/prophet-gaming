import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import prophetPhoto from '../../public/images/propetagaming.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import JoinUs from '@/components/JoinUs';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Prophet Gaming</title>
        <meta name="description" content="Your family in gaming community." />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={prophetPhoto}
                alt="Prophet Image"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hello, we are the Prophet Gaming."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a gaming community, we share a passion for video games and
                gaming culture. The gaming community is a welcoming and
                inclusive space that celebrates the creativity, innovation, and
                teamwork that are at the heart of gaming. Join us today and
                become part of a vibrant and supportive community of gamers!
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://www.facebook.com/messages/t/101850898533896"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Message Us!
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <JoinUs />
      </main>
    </>
  );
}
