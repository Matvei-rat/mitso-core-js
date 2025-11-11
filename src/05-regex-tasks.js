function getRegexForGuid() {
  return /^\{[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}\}$/;
}

function getRegexForPitSpot() {
  return /p.t/;
}

function getPasswordValidator(minLength) {
  return new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{${minLength},}$`,
  );
}
module.exports = {
  getRegexForGuid,
  getRegexForPitSpot,
  getPasswordValidator,
};
