const defaultState = {
    load:false,
    items: [],
  }
    
  const photos = (state = defaultState, action) => {
    switch (action.type) {
      case 'GET_PHOTOS':
        return {
          ...state,
          load:true,
          items: [...state.items, action.data]
        };
      case 'GET_USER':
        return {
          load:false,
          items: [],
        };  
        case 'NEW_PHOTO':
        return {
          ...state,
          load:true,
          items: [...state.items, action.data]
        };
        case 'DEL_PHOTO':
        return {
          ...state,
          load:true,
          items: state.items.filter(item=>item.name!==action.data)
        };
      default:
        return state
    }
  }
    
    export default photos;
    