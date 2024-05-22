const Button = ({ label, iconURL }) => {
  return (
    <button
      data-aos="flip-left"
      className="flex justify-center items-center gap-2 px-7 max-md:py-2 md:py-4 border font-montserrat text-lg leading-none max-md:text-sm
    text-white border-coral-sky bg-coral-sky hover:text-white rounded-full hover:font-semibold focus:translate-x-1 focus:delay-100 shadow-lg"
    >
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full bg-white max-md:w-3 max-md:h-3 md:w-5 ma:h-5 hover:translate-x-1 animate-pulse"
      />
    </button>
  );
};

export default Button;
