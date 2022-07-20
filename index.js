const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    const firstDrivers = drivers.slice(0,2);
    return firstDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    const lastDrivers = drivers.slice(2, 4);
    return lastDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(riders) {
    return function(fares){return riders * fares;}

}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(newDrivers, func) {
    return func(newDrivers);
}

//const fareDoubler = function(fares) {
  //  return createFareMultiplier(fares);
//}

//console.log(fareDoubler(2))

//

//const fareTripler = function(fares) {
  //  console.log(createFareMultiplier(riders));
    //return createFareMultiplier(riders);
//}

//apply.selectDifferentDrivers(drivers, firstOrLast)

//const selectDifferentDrivers = function(firstOrLast){
  //  if (firstOrLast === returnFirstTwoDrivers()){
    //    return returnFirstTwoDrivers;
   // }
    //if (firstOrLast === returnLastTwoDrivers()){
      //  return returnLastTwoDrivers;
    //}
//console.log(firstOrLast);
//}