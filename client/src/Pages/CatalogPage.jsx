import React, { useState, useEffect } from "react";
import { apiConnector } from "../Services/apiConnector";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../Services/api";
import { getCatalogaPageData } from "../Services/oprations/catalogPageDataAPI";

const Catalog = () => {
  const { loading } = useSelector((state) => state.profile);
  const { catalogName } = useParams();
  const [catalogPageData, setCatalogPageData] = useState(null);
  const [categoryId, setCategoryId] = useState("");

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
        <div className="w-full max-w-[1260px] mx-auto px-4 py-10 flex flex-col gap-4">
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
      <div>
        section 1
    </div>
    </>
  );
};
export default Catalog;
