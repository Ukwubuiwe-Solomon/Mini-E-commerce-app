import { Link } from "react-router-dom";
const Category = () => {
  const companyLogo = [
    { id: 1, img: "/images/company/brand1.png" },
    { id: 2, img: "/images/company/brand2.png" },
    { id: 3, img: "/images/company/brand3.png" },
    { id: 4, img: "/images/company/brand4.png" },
    { id: 5, img: "/images/company/brand5.png" },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto xl:px-28 px-4 container py-28">
      <div className="flex items-center justify-around flex-wrap py-5 gap-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
        <p className="font-semibold uppercase text-center md:-rotate-90 bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>

        <div>
          <Link to="/">
            <img src="/images/categories/image1.png" alt="" className="w-full hover:scale-105 transition-all duration-200" />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img src="/images/categories/image2.png" alt="" className="w-full hover:scale-105 transition-all duration-200"/>
            </Link>
            <Link to="/">
              <img src="/images/categories/image3.png" alt="" className="w-full hover:scale-105 transition-all duration-200" />
            </Link>
            <Link to="/">
              <img src="/images/categories/image4.png" alt="" className="w-full hover:scale-105 transition-all duration-200"/>
            </Link>
            <Link to="/">
              <img src="/images/categories/image5.png" alt="" className="w-full hover:scale-105 transition-all duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
