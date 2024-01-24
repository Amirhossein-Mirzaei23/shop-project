export default defineEventHandler(async (event) => {


  //  const query = getQuery(event)
  //  
  //  const file = query.file
    
    try{
    
    const data = await $fetch(`https://api.escuelajs.co/api/v1/products?offset=6&limit=16`.JSON.stringify())
    
    return data
    
    } catch (error){
    
    return error
    
    }
    
    })