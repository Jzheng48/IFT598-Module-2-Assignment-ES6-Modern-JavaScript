module.exports = (htmlStr, course,loanOutput)=> {
    let output = htmlStr.replace(/{%customerName%}/g, course.customerName);
    output = output.replace(/{%address%}/g, course.address);
    output = output.replace(/{%phoneNumber%}/g, course.phoneNumber);
    output = output.replace(/{%loanType%}/g, course.loanType);
    output = output.replace(/{%description%}/g, course.description);
    output = output.replace(/{%OUTPUT%}/g, loanOutput);
    return output;

}