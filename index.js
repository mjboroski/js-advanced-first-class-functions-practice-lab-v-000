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

const driversByRevenue = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
  }});
};

const driversByName = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
  }});
};


const totalRevenue  = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
  }});
};


const averageRevenue  = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
  }});
};
