import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';

const initialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case ADD_PLACE:
          return {
              ...state,
              places: state.places.concat({
                  key: Math.random().toString(),
                  name: action.placeName,
                  //image: placeImage
                  image: {
                      uri: "https://lh5.googleusercontent.com/proxy/yHgJqa6ePPwafGEJ_grwalkoWaf5pYv9F5xRf5n2dBIPnI_dm9_9Ng12NoeXw79Q3PbKxsljsaKKnvZL6a5WHkMUIH4vHhiqiy9h6OycwT7Thjkj6xNlueKy5PSPEld5yKjybhrs0iNEBKzB=s1536-k-no"
                  }
              })
          };
      case DELETE_PLACE:
          return {
            ...state,
              places: state.places.filter(place => {
                  return place.key !== state.selectedPlace.key;
              }),
              selectedPlace: null
          };
      case SELECT_PLACE:
          return {
              ...state,
              selectedPlace: state.places.find(place => {
                  return place.key === action.placeKey;
              })
          };
      case DESELECT_PLACE:
          return {
              ...state,
              selectedPlace: null
          };
      default:
          return state
  }
};

export default reducer;