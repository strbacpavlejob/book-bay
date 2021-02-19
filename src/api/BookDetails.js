

const BookDetails= async (bookId) => {

    //9785353002130
    const url = `https://openlibrary.org/works/${bookId}.json`;


    return await fetch(url)
    .then(result => result.json())
    .then(data =>{
         return data;
    })
};

export default BookDetails;   