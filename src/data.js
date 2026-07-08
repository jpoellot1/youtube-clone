 export const API_KEY = 'AIzaSyBqLM4vF_uySrN-BTOoggA5khBjip_e5zc'

 export const value_converter = (value) => {
    if(value >= 1000000) {
        return Math.floor(value/1000000) + "M"
    }
    else if (value >= 1000) {
        return Math.floor(value/1000) + "K"
    }
    else {
        return value
    }
 }