import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

const Cart = () => {
  const { total, totalItems } = useSelector((state) => state.cart);
  return (
    <>
      <div className="">
        <h1 className="mb-14 text-3xl font-medium text-richblack-5">Your Cart</h1>
        <p className="border-b border-b-richblack-400 pb-2 text-richblack-400"> {totalItems} courses in your cart </p>
        {total > 0 ? (
          <div className="mt-8 flex justify-between flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row ">
            <RenderCartCourses />
            <RenderTotalAmount />
          </div>
        ) : (
          <div className="mb-14 text-3xl font-medium text-richblack-5">Your cart is empty</div>
        )}
      </div>
    </>
  );
};
export default Cart;
