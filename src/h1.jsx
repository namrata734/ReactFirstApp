import React from 'react';



let curDate = new Date(2021, 3, 18, 8);
curDate = curDate.getHours();
let string = '';
let cssStyle = {};
if (curDate >= 1 && curDate < 6) {
  string = "Good Night";
  cssStyle.color = 'black';
} else if (curDate >= 6 && curDate < 12) {
  string = "Good Morning";
  cssStyle.color = 'orange';
} else if (curDate >= 12 && curDate < 17) {
  string = "Good Afternoon";
  cssStyle.color = 'red';
} else if (curDate >= 17 && curDate < 1) {
  string = "Good Evening";
  cssStyle.color = 'blue';
}

function Head(){
   return  <h1 style = {cssStyle} > Hello!<span> {string} </span> </h1>
}
export default Head;