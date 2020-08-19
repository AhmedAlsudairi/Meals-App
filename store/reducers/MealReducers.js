import {MEALS} from '../../data/dummy-data';
import { TOGGLE_FAVORITE , FILTER_MEALS} from '../actions/mealActions';

const initialState = {
    meals: MEALS, 
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealReducer = (state = initialState, action) => {
    switch(action.type){

        case TOGGLE_FAVORITE: 
        const existingIndex = state.favoriteMeals.findIndex((meal)=> meal.id===action.meal.id);
        if(existingIndex >=0){
            const updatedFavMeals = [...state.favoriteMeals];
            updatedFavMeals.splice(existingIndex,1);
            return {...state, favoriteMeals: updatedFavMeals}
        }else{
            const updatedFavMeals = state.favoriteMeals.concat(action.meal); 
            return {...state, favoriteMeals: updatedFavMeals}
        }

        case FILTER_MEALS: 
        const appliedFilters = action.filterSettings;
        const updatedFiLterMeals = state.meals.filter(meal=>{
            if(appliedFilters.isGlutenFree && !meal.isGlutenFree){
                return false
            }
            if(appliedFilters.isLactoseFree && !meal.isLactoseFree){
                return false
            }
            if(appliedFilters.isVegan && !meal.isVegan){
                return false
            }
            if(appliedFilters.isVagetarian && !meal.isVagetarian){
                return false
            }

            return true;
        })
        return {...state, filteredMeals: updatedFiLterMeals}
        default:
          return state;
    }
  
}

export default mealReducer;