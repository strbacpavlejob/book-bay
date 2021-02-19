import React, { useEffect, useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import '../Css/Book.css';
import BookDetails from '../api/BookDetails';
import AuthorDetails from '../api/AuthorDetails'
function Book(props) {

    let coverImage = 'http://covers.openlibrary.org/b/id/';
     // https://covers.openlibrary.org/b/id/10521270-L.jpg"

    let bookId = window.location.href;
    bookId =  bookId.replace('http://localhost:3000/book/works','');
    bookId =  bookId.replace('/','');
    bookId =  bookId.replace('/','');
    console.log(bookId);

    const [data, setData] = useState({});
    const [authorData, setAuthorData] = useState({});
    

    const [loading, setLoading] = useState(false);
    const [finalLoad, setFinalLoad] = useState(false);

    
    const loadData = async ()=>{
       // bookId = 9785353002130;
        console.log((bookId));
        setLoading(true);
        setData(await BookDetails(bookId));
        if(data!={}){
            setLoading(false);
            console.log(data);
        }
        
    }
    const loadAuthor = async()=>{
        
       console.log('data in aythors',data)
        if(data.authors!=undefined){
         let authorKey = data.authors[0].author.key;
        setLoading(true);
        setAuthorData( await AuthorDetails(authorKey));
        if(authorData!={}){
            setLoading(false);
            setFinalLoad(true);
            console.log(data);
        }
    }
    }


    const displayData = (data)=>{
        
        //description      
       let description = undefined;
       if(data.description !==undefined)
       {
           if(!data.description.value !==undefined){
               description= data.description.value;
           }
           else{
             description= data.description;
           }
       }
       else{
        description = undefined
       }

       //authorName
       let authorName=undefined;
       if(authorData !==undefined){
        authorName = authorData.name;
       }
       let authorBio = undefined;
       if(authorData.bio !==undefined){
        authorBio = authorData.bio.value;
       }
        
       // subjects
       let hasSubjects = 'subjects' in data; 
       let subjects =   hasSubjects? data.subjects : undefined;
        


        return (
            <div>
            <Card>
            <Card.Img variant="top" src={data.covers!=undefined? coverImage+data.covers[0]+"-L.jpg": "../../img/nocover.jpg"} alt='cover'/>
            <Card.Body>
                <Card.Title as="h5">{data.title}</Card.Title>
                <Card.Subtitle >{authorName!==undefined? authorName:null}</Card.Subtitle>
                <Card.Text> 
                {data.links!=undefined? '-Website: '+ data.links[0].url: null}
                <br/>
                {description!=undefined? '-Description: '+ description: null}
                <br/>
                <br/>
                {subjects!=undefined? '-Subjects: '+ subjects.join(', '): null}
                <br/>
                
                </Card.Text>               
            </Card.Body>
            </Card>
            {authorBio!=undefined? 'About Author: '+ authorBio: null}

            </div>
        );

    }


    useEffect(async () => {
        // Update the document title using the browser API

         await loadData();
         await loadAuthor();
    }, []);
    useEffect(async () => {
        // Update the document title using the browser API
         await loadAuthor();
    }, [data]);

   

    return (       
        <div className="BookDetails">
            {loading? <label>Loading Book...</label>: displayData(data)}        
        </div>
        
    );
  }
  
  export default Book;
  