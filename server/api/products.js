export default defineEventHandler(async (event)=>{
    const query = getQuery(event)
    return await $fetch(`https://dummyjson.com/products`).then(res => res.json())
})