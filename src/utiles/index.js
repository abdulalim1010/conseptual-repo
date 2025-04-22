export const getFavorites = () => {
  const favorites = localStorage.getItem('favorites')
  if (favorites) return JSON.parse(favorites)
  return []
}

export const addFavorite = phone => {

  const favorites = getFavorites()
   favorites.push(phone)
  
  console.log(favorites)
localStorage.setItem('favorites',JSON.stringify(favorites))
}
