import React, { useEffect, useState } from 'react'

const ApiTesting = () => {
    const [data,setData]=useState()
    const fetchData = async()=>{
        try{
            let response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-10-27&sortBy=publishedAt&apiKey=0c84740c9ee74c70a0ee6894999073a2")
            response = await response.json()
            setData(response.articles)
        }catch(error){
              console.log(error)
        }
       
    } 
console.log(data)
   useEffect(()=>{
      fetchData()
   },[])
  return (
    <div>
    {data ? ( // Render only if data is available
      data.map((art, index) => (
        <div key={index}> {/* Add a key for unique identification */}
        
        </div>
      ))
    ) : (
      <p>Loading...</p> // Show a loading message while data is being fetched
    )}
  </div>
  )
}

export default ApiTesting
{/* <p>Author: {art.author || 'Unknown'}</p> {/* Handle missing data */}
{/* <p>Title: {art.title || 'No Title Available'}</p> */}
{/* <p>Description: {art.description || 'No Description Available'}</p> */}
// {art.urlToImage && <img src={art.urlToImage} alt={art.title} />} Conditionally render image */}