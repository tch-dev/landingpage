// import Background from "../assets/bg.jpg";
import Logo from "../assets/tch_logo.svg";

const HeroSection = () => {
  return (
    <section className="hero">
      <div
        className="h-screen relative main-page"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="w-60 mx-auto" src={Logo} alt="jfin_chain" />
          <p className="text-center mt-8 text-7xl font-bold uppercase">
            Beyond the Future
          </p>
          <p className="text-center mt-4 text-black/70 px-8">
            TCHBAS  is a next-gen developer infrastructure that enables developers to build large-scale BSC-based applications with increased throughput and significantly reduced or even zero transaction fees. BAS is an infrastructure that enables developers and node operators to create and operate their own blockchain operating parallel to the BSC mainnet. BAS can be used as an internal value system for many users, offloading the traffic from BSC Mainnet while remaining connected to the BNB Chain. It is accomplished by using a different consensus engine and a modern execution environment that developers or the community can customize with their own parameters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
