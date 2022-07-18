// code your solution here
function saturdayFun(event="roller-skate"){
    return `This Saturday, I want to ${event}!`;
}
function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(symbol = "*"){
    return function inner(adj ="special"){
        return `You are ${symbol}${adj}${symbol}!`;

    }
}