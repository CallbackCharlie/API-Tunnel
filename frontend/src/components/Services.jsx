import styles, { layout } from "../style";
import { servicesList } from "../constants";

const ServiceCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== servicesList.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain make-white" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Services = () => (
  <section id="services" className={layout.section}>
    <div data-aos="fade-right" className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Elavate your user <br className="sm:block hidden" />experience.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] my-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
        blandit orci. Nam consequat molestie varius. Vestibulum fermentum
        purus a suscipit feugiat.
      </p>
      <a href="/register" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-pink-gradient rounded-[10px] outline-none`}>
        Get Started
      </a>
    </div>

    <div data-aos="fade-left" className={`${layout.sectionImg} flex-col`}>
      {servicesList.map((service, index) => (
        <ServiceCard key={service.id} {...service} index={index} />
      ))}
    </div>
  </section>
)

export default Services;