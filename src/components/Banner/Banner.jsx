import bannerImg from "../../assets/banner.png";
export default function Banner() {
  return (
    <div>
      <div className="hero bg-base-200 w-[80%] mx-auto mt-20 max-w-[1000px] rounded-lg shadow-md">
        <div className="hero-content flex-col lg:flex-row">
          <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              Book Your Perfect Smile Journey
            </h1>
            <p className="py-6">
              Teeth Wizard makes dental care easy! Schedule appointments,
              explore treatments, and connect with expert dentists—all in one
              place.
            </p>
            <button className="btn bg-blue-950 text-white">BOOK NOW!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
