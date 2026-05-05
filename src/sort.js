export const sort = (arr) => {
    return arr.sort((a,b) => b.health - a.health)
}