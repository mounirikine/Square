import { Link } from "react-router-dom";
import Header from "../components/Header";
import i1 from "../assets/i1.webp";
import i2 from "../assets/i2.webp";
import i3 from "../assets/i3.webp";
import i4 from "../assets/i4.webp";
import i5 from "../assets/i5.webp";
import i6 from "../assets/i6.webp";
import i7 from "../assets/i7.webp";
import Vid from "../assets/vid.mp4";

import gif from "../assets/gif.gif";

import pr1 from "../assets/pr1.jpeg";
import pr2 from "../assets/pr2.jpeg";
import pr3 from "../assets/prr3.jpeg";
import pr4 from "../assets/pr4.jpeg";
import pr5 from "../assets/pr5.jpeg";
import pr6 from "../assets/pr6.jpeg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section className="main min-h-screen">
  <Header />

  <main className="flex flex-col items-center justify-center w-full px-4 sm:px-8 lg:px-16 xl:px-32 min-h-screen">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[5rem] mb-1 text-center text-white">
      We are the online agency Compacto
    </h1>
    <p className="text-center text-lg text-white mt-3">
      At Trinker Media, we believe that creativity has the power to
      transform brands and drive business success. As a leading agency
      specializing in digital web services and marketing.
    </p>

    <div className="flex flex-col sm:flex-row items-center mx-auto gap-4 py-8">
      <Link className="w-full sm:w-auto px-6 sm:px-10 py-2 bg-white text-black rounded-full mb-4 sm:mb-0">
        Contact us
      </Link>
      <Link className="w-full sm:w-auto px-6 sm:px-10 py-2 border text-white hover:bg-white hover:text-black hover:border-none rounded-full">
        See Our Work
      </Link>
    </div>
  </main>
</section>


<section className="min-h-screen bg-gray-950 py-10">
  <div className="flex flex-wrap items-center justify-between px-5 py-3">
    <img src={i1} alt="" className="w-10 sm:w-32 mb-2 sm:mb-0" />
    <img src={i2} alt="" className="w-10 sm:w-32 mb-2 sm:mb-0" />
    <img src={i3} alt="" className="w-10 sm:w-32 mb-2 sm:mb-0" />
    <img src={i4} alt="" className="w-10 sm:w-32 mb-2 sm:mb-0" />
    <img src={i5} alt="" className="w-10 sm:w-32 mb-2 sm:mb-0" />
    <img src={i6} alt="" className="w-10 sm:w-32 mb-2 sm:mb-0" />
    <img src={i7} alt="" className="w-10 sm:w-32 mb-2 sm:mb-0" />
  </div>
  <div className="flex items-center justify-center px-5 sm:px-10 py-10">
    <main className="relative">
      <video
        src={Vid}
        className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full rounded-xl object-cover"
        controls={false}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-1">SQUARE</h1>
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Ready for your new Website?
        </h1>
        <div className="flex flex-col sm:flex-row items-center mx-auto gap-4 py-8">
          <Link className="w-full sm:w-auto px-6 sm:px-10 py-2 bg-white text-black rounded-full mb-4 sm:mb-0">
            Contact us
          </Link>
          <Link className="w-full sm:w-auto px-6 sm:px-10 py-2 border text-white hover:bg-white hover:text-black hover:border-none rounded-full">
            See Our Work
          </Link>
        </div>
      </div>
    </main>
  </div>
</section>

<section className="main min-h-screen flex flex-col items-center justify-center">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
    Let's Show Our Project
  </h1>
  <img src={gif} className="w-14 max-w-md rounded-full border mt-4" alt="" />
</section>

<section className="min-h-screen bg-gray-950 w-full">
  <div className="flex flex-col items-center justify-center py-10">
    <h1 className="text-white px-3 py-3 w-full md:w-5/6 lg:w-4/6 xl:w-3/6 text-center">
      Do you like what you see? Click on 'See all Projects' to see all the work we have done for our clients.
    </h1>
    <Link className="px-6 md:px-10 py-2 bg-white text-black rounded-full mt-4">
      See All Projects
    </Link>
  </div>
  <main className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <img
      className="h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] mx-auto rounded-xl shadow hover:blur-[3px] w-full"
      src={pr1}
      alt=""
    />
    <img
      className="h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] mx-auto rounded-xl shadow hover:blur-[3px] w-full"
      src={pr2}
      alt=""
    />
    <img
      className="h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] mx-auto rounded-xl shadow hover:blur-[3px] w-full"
      src={pr3}
      alt=""
    />
    <img
      className="h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] mx-auto rounded-xl shadow hover:blur-[3px] w-full"
      src={pr4}
      alt=""
    />
    <img
      className="h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] mx-auto rounded-xl shadow hover:blur-[3px] w-full"
      src={pr5}
      alt=""
    />
    <img
      className="h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] mx-auto rounded-xl shadow hover:blur-[3px] w-full"
      src={pr6}
      alt=""
    />
  </main>
</section>

<section className="main min-h-screen flex flex-col items-center justify-center">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
    Contact Us
  </h1>
  <img src={gif} className="w-14 max-w-md rounded-full border mt-4" alt="" />
</section>
      <section className="min-h-screen bg-gray-950">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-white bg-gray-800 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-white bg-gray-800 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-20 py-3 rounded-full text-white border hover:bg-white hover:text-black"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <section className="bg-gray-950">
        <Footer />
      </section>
    </>
  );
};

export default Home;
