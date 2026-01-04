import { assets } from '../assets/frontend_assets/assets';
// import NewsLetterBox from '../Components/NewsLetterBox';
import Title from '../components/title.jsx';

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-32">
      {/* Page Title */}
      <div className="text-center text-3xl font-semibold pt-8 mb-10 border-t border-gray-200">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row gap-16 my-10 items-center">
        <img
          src={assets.about_img}
          alt="About us illustration"
          className="w-full md:max-w-[450px] rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
        />

        <div className="flex flex-col justify-center gap-6 text-gray-600 bg-white p-8 rounded-lg shadow-lg md:w-2/4">
          <p>
            RawFit is a modern fitness and lifestyle clothing platform built for people
            who value comfort, performance, and simplicity. Our goal is to make quality
            activewear and everyday essentials easily accessible to everyone.
          </p>

          <p>
            We carefully curate products that balance functionality and style, ensuring
            each piece supports an active lifestyle while remaining comfortable for
            everyday wear. From training sessions to casual outings, RawFit is designed
            to move with you.
          </p>

          <b className="text-gray-800 text-lg">Our Mission</b>

          <p>
            Our mission at RawFit is to empower individuals to feel confident and
            comfortable in what they wear. We strive to deliver reliable quality,
            thoughtful design, and a seamless shopping experience from start to finish.
          </p>
        </div>

      </div>

      {/* Why Choose Us Section */}
      <div className="text-center py-4 text-3xl font-semibold">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="flex flex-col md:flex-row text-sm gap-6 mb-20">
        <div className="border bg-white px-10 md:px-16 py-8 flex flex-col gap-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <b className="text-gray-800 text-lg">Quality Assurance</b>
          <p className="text-gray-600">
            We take pride in offering only the highest quality products that
            meet our stringent standards for durability, performance, and value.
          </p>
        </div>
        <div className="border bg-white px-10 md:px-16 py-8 flex flex-col gap-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <b className="text-gray-800 text-lg">Convenience</b>
          <p className="text-gray-600">
            Our user-friendly website and mobile app make it easy to browse,
            compare, and purchase products on the go.
          </p>
        </div>
        <div className="border bg-white px-10 md:px-16 py-8 flex flex-col gap-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <b className="text-gray-800 text-lg">Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our dedicated team of customer service representatives is available
            around the clock to assist you with any queries or concerns you may
            have.
          </p>
        </div>
      </div>

      {/* <NewsLetterBox /> */}
    </div>
  );
};

export default About;
