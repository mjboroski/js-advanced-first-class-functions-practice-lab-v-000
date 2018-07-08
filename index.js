const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
  }});
};

const driversByRevenue = function(drivers){
  return drivers.slice().sort(function(driverA, driverB){
    return driverA.revenue - driverB.revenue;
    });
};

const driversByName = function(drivers){
  return drivers.slice().sort(function(driverA, driverB){
    return driverA.name.localeCompare(driverB.name);
    });
};


const totalRevenue  = function(drivers){
  return drivers.reduce(function(total, driver){
    return driver.revenue + total;
  }, 0);
};


const averageRevenue  = function(drivers){
  return totalRevenue(drivers) / drivers.length;
};
