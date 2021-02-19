import { Card,Button, Nav } from 'react-bootstrap';
import { BrowserRouter, HashRouter, Link } from 'react-router-dom';

import '../Css/BookCard.css';

function BookCard(props) {

    

    return (
      <div className="BookCard">
        <Card>
            <Card.Img variant="top" src={props.img} alt='cover'/>
            <Card.Body>
                <Card.Title as="h5">{ props.title.substring(0, 35)}</Card.Title>
                <Card.Subtitle >{props.author_name}</Card.Subtitle>                
                <Button className="ReadMoreButton">
                  <Nav>
                    <Nav.Link href={'/book'+props.worksKey+'/'} className="readMoreLink">Read more</Nav.Link>
                  </Nav>
                </Button>
            </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default BookCard;
  