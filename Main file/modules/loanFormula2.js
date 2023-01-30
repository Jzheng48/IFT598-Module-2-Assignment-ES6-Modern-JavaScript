module.exports = (interest,loanAmount,loanTermYears)=>{
    const r=interest;
    const PV=loanAmount;
    const n=loanTermYears;
    const P=((r*PV)/(1-Math.pow((1+r),-1)))*n;
    const output=P.toFixed(2);
    return output;
    }