// code your solution here
function saturdayFun(message = "roller-skate") {
  return `This Saturday, I want to ${message}!`;
}
saturdayFun();
function mondayWork(messo = "go to the office") {
  return `This Monday, I will ${messo}.`;
}
function wrapAdjective(result='*') {
    return function (emphatic = "a hard worker") {
        return `You are ${result }${emphatic}${result}!`
    };
    
}
