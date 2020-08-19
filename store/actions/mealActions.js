export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (meal)=>{
    return {
        type: TOGGLE_FAVORITE,  meal: meal
    }
} 

export const FILTER_MEALS = 'FILTER_MEALS';

export const changeFilterSettings = (filterSettings)=>{
    return {
        type: FILTER_MEALS,  filterSettings: filterSettings
    }
} 