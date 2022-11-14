import styles from "../style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section id="stats" className={`${styles.flexCenter}
    flex-row flex-wrap sm:mb-20 my-6`}>
      {stats.map((stat) => (
        <div data-aos="fade-up" key={stat.id} className={`flex-1 flex
        justify-start items-center flex-row lg:m-3 m-5`}>
          <div className={`${styles.flexCenter} w-[180px] h-[180px] rounded-full bg-pink-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
              <div className={`${styles.flexCenter} flex-row`}>
                <h4 className="font-poppins font-semibold
                xs:text-[40px] text-[30px] xs:leading-[53px]
                leading-[43px] text-white">
                  {stat.value}
                </h4><br />
              </div>
              <p className="font-poppins font-normal
                xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]
                text-gradient uppercase">
                  {stat.title}
                </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Stats