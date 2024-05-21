/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-[80px] mb-[48px]">
      <p className="text-yellow-600 text-[20px] italic mb-3">--{subHeading}--</p>
      <h1 className="text-[40px] border-y-2 py-2 uppercase text-center mb-5 w-[400px] mx-auto">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
