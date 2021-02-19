import '../Css/SearchBar.css';
import SearchBooks from '../api/SearchBooks';
import { useState } from 'react';
function SearchBar(props) {


    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setLoading] = useState(false);
    const handleSearch= async ()=>{
        setLoading(true);
        setSearchTerm(searchTerm.split(' ').join('-'));
        const data  = await SearchBooks(searchTerm);
        props.getData(data);
        if(data!=null){
            setLoading(false)
        }        
    }


    return (
        
        <div className='searchFiled'>
            <input 
            type = "text"        
            placeholder = 'book title'
            className="Searchterms"
            onChange={(event)=>setSearchTerm(event.target.value)}      
            />
            <button className="searchButton" onClick={handleSearch}>Search</button>
            <label>{isLoading? "Loading..." : null}</label>
        </div>
        
    );
  }
  
  export default SearchBar;
  