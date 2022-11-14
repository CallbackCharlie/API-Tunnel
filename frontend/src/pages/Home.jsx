import styles from "../style";
import { Billing, Hero, Navbar, Services, Stats } from "../components";

const Home = () => (
    <>
    <div className="bg-primary w-full overflow-hidden
    font-poppins">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} pl-20 xs:pl-[150px] pr-20 xs:pr-[150px]`}>
          <Stats />
        </div>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} pl-5 pr-5`}>
        <Services />
        <Billing />
      </div>
    </div>
    </>
);

export default Home;