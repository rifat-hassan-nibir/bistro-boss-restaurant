/* eslint-disable react/prop-types */
const CoverTitle = ({ image, title, subTitle }) => {
  return (
    <div>
      <div className="hero min-h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="bg-opacity-60 hero-overlay px-[200px] py-[50px]">
            <h1 className="mb-5 text-7xl capitalize font-bold">{title}</h1>
            <p className="mb-5 capitalize">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverTitle;
