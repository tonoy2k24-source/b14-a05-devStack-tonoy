import Logo from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <section className="bg-white">
  <div className="container mx-auto px-6 py-24 grid grid-cols-2 items-center gap-10">

    <div>
      <div className="max-w-xl">

        <h2 className="text-5xl font-bold leading-tight text-gray-900">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>

        <p className="mt-6 text-lg leading-7 text-gray-600">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.
        </p>

        <div className="mt-8 flex gap-3">
          <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium hover:opacity-90 transition cursor-pointer">
            Explore Technologies
          </button>

          <button className="px-7 py-3 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition cursor-pointer">
            Learn More
          </button>
        </div>

      </div>
    </div>

    <img
      src={Logo}
      alt=""
      className="w-full max-w-md mx-auto object-contain"
    />

  </div>
</section>
    );
};

export default Banner;