import {Card,  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux'

import configData from "../config.json"

const SingleCard = (props) => {

    const dispatch = useDispatch();

    const handleRemoveFavourite = (event) => {
    
        dispatch({type: "remove", payload: props.id })
    
    }    

    const imageUrl =  `${configData.imageBaseUrl}/${props.poster_image}`

    return(
        <div style = {{borderStyle: "solid",borderBlockColor:'black',  width: '20rem', margin: "3rem"}}>
            <Card  style = {{ width: '18rem', height: '50rem', margin: '1rem' }}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.overview}
                    </Card.Text>
                    <Link to={`/details/${props.id}`}>
                    <Button variant="primary">See Details</Button>

                    </Link>
                    <br/>
                    { props.has_remove_button && 

                    <Button style= {{marginTop: "0.3rem"}} variant="primary" onClick = {handleRemoveFavourite} > Remove </Button>
                        
                    }

                </Card.Body>
            </Card>
        </div>
    )
} 



export default SingleCard