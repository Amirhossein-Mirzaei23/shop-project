export default defineEventHandler(async (event)=>{
    const query = getQuery(event)
    return await $fetch(`https://fakestoreapi.com/products?limit=${query.limit}`)
})