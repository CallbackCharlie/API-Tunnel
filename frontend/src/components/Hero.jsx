import styles from "../style";
import { hero } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col
  ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <hr className="w-[24px] sm:w-[42px]"></hr>

      <div className="flex flex-row justify-between
      items-center w-full">
        <h1 data-aos="fade-right" className="flex-1 font-poppins font-semibold
        ss:text-[72px] text-[52px] text-white
        ss:leading-[100.8px] leading-[75px]">
          The Next<br className="sm:block hidden" />{" "}
          <span data-aos="fade-right" className="text-gradient">Generation</span>{" "}
        </h1>
      </div>
      <h1 data-aos="fade-right" className="font-poppins font-semibold ss:text-[68px]
      text-[52px] text-white ss:leading-[100.8px] w-full
      leading-[75px]">API Collection.</h1>
      <p data-aos="fade-right" className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed tempor blandit orci. Nam consequat
        molestie varius. Vestibulum fermentum purus a
        suscipit feugiat.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} my-10 mx-8 relative`}>
      <img
        src={hero}
        alt="hero"
        className="w-[80%] h-[80%] lg:w-[100%] lg:h-[100%] 
        relative pt-[42px] lg:pt-0"
        data-aos="fade-left"
      />
    </div>
  </section>
);

export default Hero;