module.exports = (course)=>{
    const r=course.interest;
    const PV=course.loanAmount;
    const n=course.loanTermYears;
    const P=((r*PV)/(1-Math.pow((1+r),-1)))*n;
    const output=P.toFixed(2);
    return output;
    }