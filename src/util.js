//this is where we'll store all the functions that interact with localStorage
// export const setStorage = (userID, recipeID) => {
//   let currentStorage = localStorage.getItem(recipeID)
//   if (!currentStorage) {
//     currentStorage = recipeID + '-'
//   }
//   let storageArray = currentStorage.split('-')
//   let updatedArray = storageArray.push(recipeID)
//   localStorage.setItem(userID, updatedArray)
// }

export const setStorage = (user, recipe) => {
  let userStorage = localStorage.getItem(recipe)
  if (userStorage) {
  let idToStore = recipe;
  let stringifiedObject = JSON.stringify(idToStore);
  localStorage.setItem(user, stringifiedObject);
} else {
  userStorage = recipe;
}

}


// saveWinsToStorage() {
//   var objectToStore = this.wins;
//   var stringifiedObject = JSON.stringify(objectToStore);
//   localStorage.setItem(`${this.name} wins`, stringifiedObject);
// }
//
// retrieveWinsFromStorage() {
//   var retrievedObject = localStorage.getItem(`${this.name} wins`);
//   var parsedObject = JSON.parse(retrievedObject);
//   this.wins = parsedObject;
//   return `Wins: ${this.wins}`;
// }
//
// }
