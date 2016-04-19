module.exports = (units, defaultUnit) => {
  return units.split(' ').map((unit) => {
    const parsedUnit = /[\d\.,]*(\D*)$/.exec(unit.toString())[1]

    return parsedUnit ? unit : unit.toString() + defaultUnit
  }).join(' ')
}
