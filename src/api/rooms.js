//ADD A ROOM
export const addRoom = async (roomData)=>{
    const response  = await fetch(`${import.meta.env.VITE_API_URL}/rooms`,{
        method:"POST",
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(roomData)
    })
    const data = await response.json()
    return data
}


//GET ALL ROOMS
export const getAllRooms =async()=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    const data = await response.json()
    return data
}

//GET ONE SINGLE ROOM
export const getRoom =async(id)=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`)
    const data = await response.json()
    return data
}

//GET FILTERED ROOM FOR HOST
// export const getRooms = async email =>{
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${email}`,{
//         headers:{
//             authorization : `Bearer ${localStorage.getItem('access-token')}`,
//         },
//     })
//     const data = await response.json()
//     return data
// }

//DELETE A SINGLE ROOM FOR HOST 
export const deleteRoom = async id =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`,{
        method:'DELETE',
        headers:{
            'content-type':'application/json'
        }
    })
    const result = await response.json()
    return result
}

// update a room
export const updateRoom = async (roomData, id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
      body: JSON.stringify(roomData),
    })
  
    const data = await response.json()
    return data
  }