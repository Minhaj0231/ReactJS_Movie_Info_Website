import 'bootstrap/dist/css/bootstrap.css';

import {Container, Row, Col, Spinner,Button } from 'react-bootstrap';
import  {useState, useEffect, useCallback }  from 'react'

import SingleCard from '../components/SingleCard'

import configData from "../config.json"


const HomePage = (props) => {
    const [shows, setShows] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNUm, setPageNUm] = useState(1)
    
    const apiUrl = `${configData.apiBaseUrl}${configData.nowPlayingMovieUrl}api_key=${configData.apikey}&page=${pageNUm}`
    const fetchShow = useCallback( async () => {
        
        setIsLoading(true);
        
        try{
            
            const response  = await fetch(apiUrl);
            if(!response.ok){
                console.log("error")
            }
            const data = await response.json();

           
            
            const movie_list = data["results"].map((movie) => {
                return {
                    id:movie["id"],
                    title: movie["title"],
                    poster_image: movie["poster_path"],
                    overview: movie["overview"]
                };

            });

            setShows(movie_list)

           

            

            
            setIsLoading(false);

            
        } catch(error){
            
            console.log(error)
        }

        },
        [apiUrl,setShows],
    )


    useEffect(() => {
        fetchShow();
    }, [fetchShow])


    const handlePagination = (event) => {

         setPageNUm(event.target.id)
         fetchShow()

    }    


    // for pagination  5 pages. page 1 to 5
    const pageNumbers = [];
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }





    return(
        <div>
            <h2> Home</h2>
            <Container>
            <Row>

            
            { isLoading &&

                    
             <Spinner animation="border" role="status">
             <span className="visually-hidden">Loading...</span>
             </Spinner> 

            } 
             { !isLoading &&
                shows.map(show => {
                    return (
                        <Col sm={4} >
                        <SingleCard  
                        key={show["id"]}
                        id= {show["id"]}
                        title = {show["title"]}
                        poster_image= {show["poster_image"]}
                        overview= {show["overview"]}
                        />
                     </Col> 
                    )
                })
            
            }

                
            </Row>

        <ul style = {{listStyle:'none', display:'flex'}}>
        {
            pageNumbers.map((number) => {
                return (
                  <Button style= {{margin:'1rem'}}>
                      <li
                    key={number}
                    id={number}
                    onClick={handlePagination}
                  >
                    {number}
                  </li>
                  </Button>
                );
              })
        }
        </ul>
            </Container>

             
        </div>
    )
} 


export default HomePage