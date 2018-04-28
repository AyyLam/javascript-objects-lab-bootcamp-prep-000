var recipes = {} 

function updateObjectWithKeyAndValue(object, key, value) {
<<<<<<< HEAD
  var newObj = Object.assign({}, object)
  newObj[key] = value
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
  
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({},object)
  delete newObj[key] 
  return newObj 
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
=======
  object[key] = value
  return object
>>>>>>> 712cff399adba15c4a557f17f79bbcd388606156
}