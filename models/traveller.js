const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journeys) => {
    return journeys.startLocation;
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journeys) => {
    return journeys.endLocation;
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journeys) => {
    return journeys.transport === transport;
  })
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journeys) => {
    return journeys.distance > minDistance;
  })
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((runningTotal, journeys) => {
    return runningTotal + (journeys.distance);
  }, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
};


module.exports = Traveller;
