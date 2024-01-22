export default defineEventHandler(async (event)=>{
    const query = getQuery(event)
    return `https://api.escuelajs.co/api/v1/${query}`
})