// code your solution here
// helpers.js

// Function: saturdayFun
// Parameters: activity (optional)
// Returns: String describing Saturday activity
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function: mondayWork
  // Parameters: activity (optional)
  // Returns: String describing Monday activity
  let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Function: wrapAdjective
  // Parameters: symbol (String)
  // Returns: Function that wraps an adjective in a highlight
  function wrapAdjective(symbol = "*") {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
  