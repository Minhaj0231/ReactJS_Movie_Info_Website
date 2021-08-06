import {Container, Row, Col} from 'react-bootstrap';
import {useSelector} from 'react-redux'
import SingleCard from '../components/SingleCard'

const FavouritePage = (props) => {
    const shows = useSelector((state) => state.favourite_movies)


    return(
        <div>
            <h2> Favourite Movies </h2>

            <Container>
            <Row>

            
        
             {
                shows.map(show => {
                    return (
                        <Col sm={4} >
                        <SingleCard  
                        key={show["id"]}
                        id= {show["id"]}
                        title = {show["title"]}
                        poster_image= {show["poster_image"]}
                        overview= {show["overview"]}
                        has_remove_button = {true}
                        />
                     </Col> 
                    )
                })
            
            }

                
            </Row>

        
            </Container>



        </div>
    )
} 


export default FavouritePage