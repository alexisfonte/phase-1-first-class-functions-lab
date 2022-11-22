// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    let newDrivers = drivers.slice(0,2);
    return newDrivers;
};

const returnLastTwoDrivers = function() {
    let driverCount = drivers.length;
    let lastDrivers = drivers.slice(driverCount - 2, driverCount);
    return lastDrivers;
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(interger) {
    const fareMultiplier = fare => (fare * interger);
    return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFunction){
    return driverFunction(drivers);
}