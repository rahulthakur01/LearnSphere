import {useSelector} from "react-redux"
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

const Cart = () =>{
    const{total, totalItems} = useSelector((state)=>state.cart)
    return(
        <>
        <div>
            <h1>Your Cart</h1>
            <p> {totalItems} courses in your cart </p>
           {
            total > 0 ? (<div>
                 <RenderCartCourses/>
                 <RenderTotalAmount/>
            </div>):(<div>
                Your cart is empty
            </div>)
           }
        </div>
        </>
    )
}
export default Cart;
