import React, { useState, useEffect } from "react";
import { apiConnector } from "../Services/apiConnector";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../Services/api";
import { getCatalogaPageData } from "../Services/oprations/catalogPageDataAPI";
import CourseSlider from "../Component/Core/Catalog/CourseSlider";
import Course_Card from "../Component/Core/Catalog/Course_Card";

const Catalog = () => {
  const { loading } = useSelector((state) => state.profile);
  const { catalogName } = useParams();
  const [catalogPageData, setCatalogPageData] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [active, setActive] = useState(1)

  //first fetch categories then call getCatalogPageData
  useEffect(() => {
    const getCategories = async () => {
      const response = await apiConnector("GET", categories.CATEGORIES_API);
      const category_id = response?.data?.data?.filter(
        (ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName
      )[0]._id;
      setCategoryId(category_id);
    };
    getCategories();
  }, [catalogName]);

  useEffect(() => {
    const getCategoryPageDetails = async () => {
      try {
        const res = await getCatalogaPageData(categoryId);
        setCatalogPageData(res);
      } catch (error) {
        console.log(error);
      }
    };
    if (categoryId) {
      getCategoryPageDetails();
    }
  }, [categoryId]);

  console.log("CATEGORY PAGE DETAILS RESPONSE...", catalogPageData);

  return (
    <>
      <div className="pt-[80px] bg-richblack-800">
        <div className="w-full lg:max-w-[1260px] max-w-[650px] mx-auto px-4 py-10 flex flex-col gap-4">
          {/* Breadcrumb */}
          <p className="text-sm text-richblack-300">
            {`  Home / Catalog /`}{" "}
            <span className="text-yellow-25 font-medium">
              {catalogPageData?.data?.selectedCategory?.name}
            </span>
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold text-richblack-5">
            {catalogPageData?.data?.selectedCategory?.name}
          </h1>

          {/* Description */}
          <p className="max-w-[870px] text-richblack-200 leading-relaxed">
            {catalogPageData?.data?.selectedCategory?.description}
          </p>
        </div>
      </div>
      {/* section 1 */}
      <div className="w-full border lg:max-w-[1260px] max-w-[650px] mx-auto my-4">
        <div>
          <h1 className='text-2xl font-semibold text-richblack-25'>Courses you get started</h1>
          <div className="flex items-center gap-4 text-richblack-5 border-b border-b-richblack-600 my-4 text-sm">
            <p
             className={`px-4 py-3 cursor-pointer ${ active === 1 ? "border-b border-yellow-25 text-yellow-5": "text-richblack-50"}`}
             onClick={()=>setActive(1)}
            >Most Popular</p>
            <p className={`px-4 py-3 cursor-pointer ${ active === 2 ? "border-b border-yellow-25 text-yellow-5": "text-richblack-50"}`}onClick={()=>setActive(2)}>New</p>
          </div>
        </div>
        <div>
        <CourseSlider Courses={catalogPageData?.data?.selectedCategory?.courses} />
        </div>
      </div>
      {/* section 2 */}
      <div className="w-full border lg:max-w-[1260px] max-w-[650px] mx-auto my-4">
        <h2 className="text-richblack-25 text-2xl font-semibold">
          Top Courses in {catalogPageData?.data?.differentCategories?.name}
        </h2>
        <div className="py-8">
              <CourseSlider
                Courses={catalogPageData?.data?.differentCategories?.courses}
              />
            </div>
      </div>

      {/* section 3 */}
      <div className="w-full border lg:max-w-[1260px] max-w-[650px] mx-auto my-4">
        <h2 className="text-richblack-25 text-2xl font-semibold">
         Frequently bought {catalogPageData?.data?.differentCategory?.name}
        </h2>
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
              catalogPageData?.data?.mostSellingCourses?.slice(0,4).map((course, i)=>(
                <Course_Card course={course} key={i} Height={"h-[400px]"}/>
              ))
            }
          </div>
            
            </div>
      </div>
      
    </>
  );
};
export default Catalog;
