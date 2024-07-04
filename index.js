// Code your solution in this file!
function createFareMultiplier(multiplier){
    return function(fare) {
        return fare * multiplier;
    }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]

function selectDifferentDrivers(drivers, driverSelector){
    return driverSelector(drivers);
}
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

consolelog(selectDifferentDrivers(driver, returnFirstTwoDrivers));
consolelog(selectDifferentDrivers(driver, returnLastTwoDrivers));

console.log(fareDoubler(10));
console.log(fareTripler(10));