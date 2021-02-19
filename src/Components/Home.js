import BookCard from "./BookCard";
import SearchBar from "./SearchBar";
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../Css/Home.css';


function Home() {
 
  let coverImage = 'http://covers.openlibrary.org/b/id/';
  

  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const fileredData = data.filter((item)=>item.cover_i);

  const booksPerPage = 10;
  const pagesVisited = pageNumber *booksPerPage;
  const pageCount= Math.ceil(fileredData.length /booksPerPage);

  const changePage = ({selected})=>{
    setPageNumber(selected);
  };

  const displayBooks = fileredData
  .slice(pagesVisited, pagesVisited + booksPerPage)
  .map(item =>{
      return <BookCard 
      title={item.title} author_name={item.author_name}
      isbn={ item.isbn  ?item.isbn[0] : 'No ISBN'}
      subject = {item.subject ? item.subject[0]:'No Subject'}
      readingLink = {item.key? item.key:null}
      img={  item.cover_i ? coverImage +item.cover_i +'-L.jpg': null }   
      worksKey = {item.key}     
      />; 
  });



  
  const getData= (dataArr)=>{
    console.log("dataArr", dataArr);
    setData(dataArr);
  }


    return (
      <div>
          <SearchBar getData={getData}/>

          <div className='cardsList'>
          {displayBooks}          
          </div>
          <div className="pagination">
          <div className="paginateStyle">
          <ReactPaginate 
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBtnn"}
            disabledClassName={"paginationDisabled"}
            activateClassName={"paginationActive"}
          />
          </div>
                     

          </div>

      </div>
      
    );
  }
  
  export default Home;
  