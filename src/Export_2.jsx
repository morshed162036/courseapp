import currDate from "./Export_1";

let greetings = "";
let cssStyle = { };
if(currDate>=1 && currDate<12){
  greetings = 'Good Morning';
  cssStyle.color = 'green';
}else if(currDate>=12 && currDate<19){
  greetings = 'Good AfterNoon';
  cssStyle.color = 'red';
}else{
  greetings = 'Good Night';
  cssStyle.color = 'blue';
}
function myName(){
    let name='I Am Morshed'
    return name;
}
export { greetings,cssStyle,myName}