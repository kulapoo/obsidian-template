const globalVarStore = {}

function globalVars(key, value) {
  if (value !== undefined) {
    globalVarStore[key] = value
  }
  return function() {

    return globalVarStore[key]
  }
}

module.exports = globalVars