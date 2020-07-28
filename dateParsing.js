function format(dateObject, dateFormat) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    dateFormat = dateFormat.toLowerCase()
    dateFormat = dateFormat.replace("yy", dateObject.getFullYear().toString().slice(-2));
    dateFormat = dateFormat.replace("y", dateObject.getFullYear());
    dateFormat = dateFormat.replace("dd", function () {
        if ((dateObject.getDate()) < 10) {
            return "0" + (dateObject.getDate() + 1);
        } else return (dateObject.getDate());
    });
    dateFormat = dateFormat.replace("d", dateObject.getDate());
    dateFormat = dateFormat.replace("mmmm", monthNames[dateObject.getMonth()]);
    dateFormat = dateFormat.replace("mmm", monthNames[dateObject.getMonth()].substring(0, 3));
    dateFormat = dateFormat.replace("mm", function () {
        if ((dateObject.getMonth() + 1) < 10) {
            return "0" + (dateObject.getMonth() + 1);
        } else return (dateObject.getMonth() + 1);
    });
    dateFormat = dateFormat.replace("m", dateObject.getMonth() + 1);

    return dateFormat;
}

function fromFormat(dateString, dateFormat) {
    
    let dateStringArray =  dateString.split(/\W/);
    let myDate = new Date(dateStringArray[2], parseInt(dateStringArray[0])-1, parseInt(dateStringArray[1]));
    return myDate;
}
console.log(format(new Date(), "m-dd/Y"));
console.log(fromFormat("07-27/2020", "").toString());
module.exports = {
    method: format,
    otherMethod: fromFormat,
};