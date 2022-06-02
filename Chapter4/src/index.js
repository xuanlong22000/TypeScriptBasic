var reserve = function (from, toOrDestination, destination) {
    if (toOrDestination instanceof Date && destination !== undefined) {
        return from && toOrDestination;
    }
    else if (typeof toOrDestination === 'string') {
        return from && toOrDestination;
    }
};
var d = new Date();
console.log(reserve(d, 'SAiGon'));
