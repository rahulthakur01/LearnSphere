import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { studentEndpoints } from "../api";
import {setPaymentLoading} from "../../Redux/slices/courseSlice"
import rzpLogo from "../../assets/Logo/rzp_logo.png"
import {resetCart} from "../../Redux/slices/cartSlice"

const {COURSE_PAYMENT_API, COURSE_VERIFY_API, SEND_PAYMENT_SUCCESS_EMAIL_API} = studentEndpoints;

const loadScript = (src)=>{
    return new Promise((resolve)=>{
        const script = document.createElement("script");
        script.src = src;

        script.onload = () =>{
            resolve(true);
        }
        script.onerror = () =>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

export const buyCourse = async (token, courses, userDetails, navigate, dispatch)=>{
    const toastId = toast.loading("loading...")

    try{
        // load script
        const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if(!response){
            toast.error("Razorpay SDK faild to load.")
        }

        // initiate order
        const orderResponse = await apiConnector("POST", COURSE_PAYMENT_API, 
                                                {courses}, {
                                                 Authorization: `Bearer ${token}`
                                                })

        if(!orderResponse.data.success){
            throw new Error(orderResponse.data.message)
        }
        console.log("PRINTING ORDERRESPONSE.........", orderResponse);

        const options ={
            key: import.meta.env.VITE_RAZORPAY_KEY,
            currency: orderResponse.data.currency,
            amount:`${ orderResponse.data.amount}`,
            order_id:orderResponse.data.message.id,
            name:"LearnSphere",
            description: "Thank You for Purchasing the Course",
            image:rzpLogo,
            prefill:{
                name:`${userDetails.firstName}`,
                email: userDetails.email
            },
            handler: function(response){
                sendPaymentSuccessEmail(response, orderResponse.data.message.amount, token);
                verifyPayment({...response, courses}, token, navigate, dispatch);
            }
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open();
        paymentObject.on("Payment failed", function(response){
            toast.error("oops, payment failed");
            console.log(response.error)
        })
    
    }  catch(error) {
        console.log("PAYMENT API ERROR.....", error);
        toast.error("Could not make Payment");
    }
    toast.dismiss(toastId)

}

const sendPaymentSuccessEmail = async({response, amount, token}) =>{
    
    try{
        await apiConnector("POST", SEND_PAYMENT_SUCCESS_EMAIL_API, 
            {
                orderId: response.razorpay.order_id,
                paymentId: response.razorpay.payment_id,
                amount
            },
            {
            Authorization: `Bearer ${token}`
        })
    }catch(error){  
        console.log("SEND_PAYMENT_SUCCESS_EMAIL_API......", error)

    }

}

const verifyPayment = async(bodyData, token, navigate, dispatch)=>{
    const toastId = toast.loading("Verifying payment...");
    dispatch(setPaymentLoading(true))

    try{
        const res = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
            Authorization: `Bearer ${token}`
        })

        if(!res.data.success){
            throw new Error(res.data.message)
        }
        toast.success("Payment successful, you are added to the course");
        navigate("/dashboard/enrolled-courses");
        dispatch(resetCart())
    }catch(error){
        console.log("Payment verify error....", error)
        toast.error("could not verify payment")
    }
    toast.dismiss(toastId);
    dispatch(setPaymentLoading(false))
}