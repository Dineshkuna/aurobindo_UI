
exports.getTimePeriods = (count) => {
    let timePeriods = [];
    let currentYear = new Date().getFullYear();
    for (let index = 0; index < count; index ++) {
        let yearString = (currentYear - 1).toString() + "-" + currentYear.toString()
        timePeriods.push(yearString)
        currentYear = currentYear - 1
    }
    return timePeriods;
}
