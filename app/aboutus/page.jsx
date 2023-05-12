import "./aboutus.css";
import Card from "../shared/Card";
import CustomCard from "../shared/CustomCard";
import { SiMicrostrategy } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import bhuvaneshImage from "../../public/bhuvaneshimage.jpg";
import aboutus from "../../public/aboutus.jpg";
const AboutUs = () => {
  return (
    <div className="about-us-bg bg-no-repeat bg-cover">
      {/* about us heading section */}
      <section className="mx-2 px-6 py-3">
        <div className="w-100 h-screen flex justify-center items-center font-serif ">
          <div>
            <p className="md:text-7xl sm:text-6xl xs:text-4xl font-semibold">
              About <span className="text-red">U</span>s
            </p>
            <p className="flex justify-center items-center space-x-1">
              <span className="mr-1 md:text-xl sm:text-lg xs:text-sm">
                Home
              </span>
              <span className="text-grey">{">"}</span>
              <span className="text-grey ml-1 md:text-xl sm:text-lg xs:text-sm">
                about us
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* detail about us section  */}
      <section className="mx-2 my-1 px-6 py-3 about-us-pattern bg-cover bg-no-repeat about-us-bg">
        <div className="grid lg:grid-cols-2 sm:grid-cols-2 xs:grid:col-1 gap-4 w-full">
          <div className="flex justify-center items-center p-2">
            <div>
              <p className="text-5xl break-words flex-wrap font-semibold my-2 antialiased">
                <span className="text-red">F</span>abricating{" "}
                <span className="text-red">N</span>ext{" "}
                <span className="text-red">G</span>eneration{" "}
                <span className="text-red">S</span>olution
                <span className="text-red font-bold"> .</span>
              </p>
              <p className="break-words whitespace-normal">
                RevDau is founded by business and technology experts with
                extensive backgrounds in designing, implementing, and managing
                large and complex IT projects for Enterprises and
                Telecommunication providers. We thrive on empowering creative
                solutions and unleashing the untapped potential for our clients.
                We are a solution and business partner who finds improvement
                opportunities behind business problems and delivers
                technology-enabled solutions to help grow your business. RevDau
                provides high value consulting and development services in the
                areas of Digital transformation and Product Engineering with
                Continuous focus on solutions using modern edge technologies.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card image={aboutus} />
          </div>
        </div>
      </section>
      {/* why revdau section */}
      <section className="lg:mx-2 my-2 sm:px-44 md:px-6 lg:px-36 py-3">
        <div className="w-100 text-center text-5xl break-words flex-wrap font-semibold">
          <span className="text-red">W</span>hy
          <span className="text-red"> R</span>evDau?
        </div>
        <div class="my-8 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-2">
          <CustomCard
            title="Strategy & Business"
            body="We design business models and growth strategies to be effective and competitive."
            icons={<SiMicrostrategy />}
          />
          <CustomCard
            title="Product Design"
            body="We design business models and growth strategies to be effective and competitive."
            icons={<MdDesignServices />}
          />
        </div>
      </section>
      {/* our team */}
      <section className="my-2 mx-4">
        <div
          className="text-center font-bold sxs:text-2xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-4xl
        sm:px-2 md:px-4 lg:px-6 lg:mx-6"
        >
          <span className="text-red ">M</span>eet
          <span className="text-red"> o</span>ur{" "}
          <span className="text-red">a</span>wesome{" "}
          <span className="text-red">&</span>{" "}
          <span className="text-red">p</span>rofessional
          <span className="text-red"> t</span>
          eam
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
