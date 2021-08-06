
import './PostDetailPage.css'

import  {useState, useEffect, useCallback }  from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'


import configData from "../config.json"


const PostDetailPage = (props) => {



    const params = useParams();

    const dispatch = useDispatch();
    const favouriteMovies = useSelector((state) => state.favourite_movies)

    const [details, setDetails] = useState({})

    const apiUrl = `${configData.movieDetailUrl}${params.showId}?api_key=${configData.apikey}`

    const fetchShowDetails = useCallback( async () => {
      
      try{
          const response  = await fetch(apiUrl);
          if(!response.ok){
              console.log("error")
          }
          
          const data = await response.json();

         
          setDetails(data)
                  
      } catch(error){
          console.log(error)
      }

      },
      [apiUrl,setDetails],
  )


  useEffect(() => {
    fetchShowDetails();
  }, [fetchShowDetails])


  const handleaddFavourite = (event) => {
    

    const movie_obj = {
      id:params.showId,
      title: details["title"],
      poster_image: details["poster_path"],
      overview: details["overview"]

    }

    dispatch({type: "add", payload: movie_obj })




}    


    return (
        <div className={"book-page"}>
          <div className={"details"}>
            <img src={`${configData.imageBaseUrl}/${details["poster_path"]}`} />
            <div className={"details-child"}>
              <h1>Title: <b>{details["title"]}</b></h1>
              <p>Language: <b>{details["original_language"]}</b></p>
              <p>Popularity: <b>{details["popularity"]}</b></p>
              <p>Release Date:<b> {details["release_date"]}</b></p>
              <p>Revenue: <b>{details["revenue"]} USD</b></p>
              <p>Average Vote: <b>{details["vote_average"]}</b></p>
              
                
              <button style={{backgroundColor:'blue',}} onClick = {handleaddFavourite}> 
              <b style={{color:'white'}}>Add to favourite</b>
              </button>
             
            
            </div>
          </div>
          <div className={"description"}>
            <p>overview</p>
            <p>{details["overview"]}</p>
          </div>
        </div>
      );





} 



export default PostDetailPage