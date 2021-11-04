//this is where we'll store all the functions that interact with localStorage
export const setStorage = (userID, recipeID) => {
  const currentStorage = localStorage.getItem(userID)
  if (!currentStorage) {

  }
  let storageArray = currentStorage.split('-')
  let updatedArray = storageArray.push(recipeID)
  localStorage.setItem(userID, updatedArray.join('-'))
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
