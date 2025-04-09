import SliderBar from "@/components/slider-bar";

function PriceRange({views, setViews, price}) {
  return (
    <div className="flex flex-col justify-center">
      <div className="relative h-full p-8">
        <div className="relative w-full mb-2 flex md:justify-between items-center text-grayish-blue font-bold">
          <p className="mx-auto md:m-0 md:inline-block">{views}0K PAGEVIEWS</p>
          <p className="hidden md:inline-block">
            <span className="text-3xl text-dark-desaturated-blue">
              ${price}.00{" "}
            </span>
            / Month
          </p>
        </div>
        <SliderBar views={views} setViews={setViews} />
      </div>
      <p className="mx-auto mt-3 md:hidden text-grayish-blue font-bold">
        <span className="text-3xl text-dark-desaturated-blue">
          ${price}.00{" "}
        </span>
        / Month
      </p>
    </div>
  );
}

export default PriceRange;
