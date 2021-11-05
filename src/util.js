
export const toggleInStorage = (userID, drinkID) => {
    let currentStorage = localStorage.getItem(userID);
    if(!currentStorage){
        currentStorage = drinkID
        localStorage.setItem(userID, drinkID)
        return [currentStorage]
    }
    let favoriteDrinkIDsArr = currentStorage.match(/.{1,6}/g);
    const isAMatch = favoriteDrinkIDsArr.findIndex((element) => {
      element.includes(drinkID)
    })
    if (isAMatch) {
      favoriteDrinkIDsArr.splice(1, isAMatch)
      let arrayStringed = favoriteDrinkIDsArr.join('')
      localStorage.setItem(userID, arrayStringed)
      return favoriteDrinkIDsArr;
    }
    let newArr = [...favoriteDrinkIDsArr, drinkID]
    let arrStringed = newArr.join('')
    localStorage.setItem(userID, arrStringed)
    return newArr;
}
