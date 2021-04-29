export const INITIAL_PAGE = 1;
export const NEW_GAME = 'https://cdn.dribbble.com/users/2346349/screenshots/9246147/loading.gif';
export const STAR = ['❌', '⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐🌟']

export const resRating = (rating) =>{
    var rat = `${STAR[Math.round(rating)]} ${rating}/5`
    return rat
}
