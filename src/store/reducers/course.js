const initialState = {course: [{
    id:1,
    courseName : 'First Course',
    category:1,
    subCategory:2,
    fees:1000,
},
{
    id:2,
    courseName : 'Second Course',
    category:2,
    subCategory:1,
    fees:2000,
}]};

 function course(state=initialState, action) {
     console.log("course...",state)
     return state; 
 }

 export default course; 