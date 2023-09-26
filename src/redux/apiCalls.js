
import { loginFailure, loginStart, loginSuccess} from "./userRedux"
import { privateRequest, publicRequest } from "../requestMethods";

export const  login = async(dispatch,user)=>{
    // console.log(user);
    dispatch(loginStart());
    try{
    const res = await publicRequest.post("/auth/authenticate",user);
    console.log(res.data)
    dispatch(loginSuccess(res.data));
    }catch(err){
    dispatch(loginFailure())
    }
}

export const saveCartData = async(cart)=>{
   const res = await privateRequest.post("/cart/saveCart",cart);
//    console.log("data has been saved : " + res.data)
}

export const getCartDataFromDB = async(userId)=>{
            let res= await privateRequest.get(`/cart/getAll${userId}`);
            // console.log(res.data);
}

 