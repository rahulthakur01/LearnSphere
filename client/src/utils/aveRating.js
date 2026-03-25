// export default function GetAvgRating (ratingArr){
//     if(!ratingArr || ratingArr.length === 0) return 0;
//     const totalReviewCount = ratingArr.reduce((acc, cur)=>{
//         acc += cur.length
//         return acc;
//     }, 0)

//     const multiplier = pow(10,i);
//     const avgRatingCount = Math.random((totalReviewCount/ratingArr.length)* multiplier) / multiplier;
//     return avgRatingCount;
// }
export default function GetAvgRating(ratingArr){
    if(!ratingArr || ratingArr.length === 0) return 0;
  
    const total = ratingArr.reduce((acc, cur) => {
      return acc + cur.rating; // assuming rating field hai
    }, 0);
  
    const avg = total / ratingArr.length;
    return avg.toFixed(1);
  }