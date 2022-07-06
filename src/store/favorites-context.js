import { createContext, useState } from "react";

//此變數以大寫呈現，因為其實它是由react創造出一個組建
//此為定義不需做任何事情
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {

        //setUserFavorites(userFavorites.concat(favoriteMeetup))
        //上述做法不該這樣去更新狀態，因為react並不會真正的即時更新狀態，只會在幕後先運算，雖然很快但不是立即

        //獲取前一個快照，並直接加上，才是最對的做法
        setUserFavorites((prevUserFavorites) => {
           return prevUserFavorites.concat(favoriteMeetup);
        })
        
    }
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }
    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = { 
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
    <FavoritesContext.Provider value={context}>
        {props.children} 
    </FavoritesContext.Provider>);
}

export default FavoritesContext;