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
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
  }});
};


const totalRevenue  = function(drivers){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
  }});
};


const averageRevenue  = function(drivers){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
  }});
};
