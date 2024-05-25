const Skeleton = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <div className="skeleton h-[400px] w-full"></div>
        <div className="container mx-auto grid grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="skeleton h-52"></div>
            <div className="skeleton h-4 w-[50%]"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="space-y-4">
            <div className="skeleton h-52"></div>
            <div className="skeleton h-4 w-[50%]"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="space-y-4">
            <div className="skeleton h-52"></div>
            <div className="skeleton h-4 w-[50%]"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
