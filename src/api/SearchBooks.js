

const SearchBooks= async (searchTerm) => {

     const url = `http://openlibrary.org/search.json?title=${searchTerm}`

     return await fetch(url)
     .then(result => result.json())
     .then(data =>{
          return data.docs;
     })
};

export default SearchBooks;   