
// export const toggleInStorage1 = (userID, drinkID) => {
//     let currentStorage = localStorage.getItem(userID);
//     if(!currentStorage){
//         currentStorage = drinkID
//         localStorage.setItem(userID, drinkID)
//         return [currentStorage]
//     }
//     let favoriteDrinkIDsArr = currentStorage.match(/.{1,6}/g);
//     const isAMatch = favoriteDrinkIDsArr.findIndex((element) => {
//       element.includes(drinkID)
//     })
//     if (isAMatch) {
//       favoriteDrinkIDsArr.splice(1, isAMatch)
//       let arrayStringed = favoriteDrinkIDsArr.join('')
//       localStorage.setItem(userID, arrayStringed)
//       return favoriteDrinkIDsArr;
//     }
//     let newArr = [...favoriteDrinkIDsArr, drinkID]
//     let arrStringed = newArr.join('')
//     localStorage.setItem(userID, arrStringed)
//     return newArr;
// }








// export const toggleInStorage12 = (userSubID, drinkObj) => { //userSUB id google-oauth2|1105692342342342348 
//   const userLS = localStorage[userSubID]
//   // userLS is localstorage.google-oauth2|1105692342342342348
//   //stored in UserLS is an JSON object
//   let ls = {};



//   if (!userLS){
//   //if the localStorage.userID is undefined set just the first saved drink as the in an array

//     localStorage.setItem(userSubID, drinkID)
//     return [drinkID]
//   };

//   let userLSArr = userLS.match(/.{1,6}/g)
//   //split the string of numbers every 6 numbers(characters)
//   const indexIfFavorite = userLSArr.findIndex(id => id===drinkID)

//   //these blocks are the same except for line 51&57
//   if (indexIfFavorite>-1){ //if LS has ID saved already
//     userLSArr.splice(indexIfFavorite, 1); //then we want to remove where it was found with (indexIfFavorite)
//     const userLSArrStr = userLSArr.join(''); 
//     localStorage.setItem(userSubID, userLSArrStr);
//     return userLSArr;   
    
//   } else {
//     userLSArr.push(drinkID); //while here we are just adding the drink id to the array
//     const userLSArrStr = userLSArr.join('')//then joining the array back together with no spaces in between
//     localStorage.setItem(userSubID, userLSArrStr)//setting that (userLSArrStr) string of numbers at the subID localStorage key
//     return userLSArr //returning the all drink ids that are in localStorage from user key after changing data
    

//   }
// }




export const toggleInStorage  = (userSubID, recipeObj) => {
  const initialLocalStorage = JSON.parse(localStorage.getItem(userSubID));
  if(!initialLocalStorage){
    let defaultArr = [recipeObj]
    localStorage.setItem(userSubID, JSON.stringify(defaultArr))
    return defaultArr
  }
  const indexIfFoundInStorage = initialLocalStorage.findIndex((recipe) => recipe.idDrink  === recipeObj.idDrink)
  if(indexIfFoundInStorage>-1){
    initialLocalStorage.splice(indexIfFoundInStorage, 1)
    localStorage.setItem(userSubID, JSON.stringify(initialLocalStorage))
    return initialLocalStorage
  }else{
    initialLocalStorage.push(recipeObj)
    localStorage.setItem(userSubID, JSON.stringify(initialLocalStorage))
    return initialLocalStorage
  }
}

export const getUserStorage = (userSubID) => {
  let currentStorage = localStorage.getItem(userSubID)
  let currentStorageObj = JSON.parse(currentStorage)
  return currentStorageObj
}