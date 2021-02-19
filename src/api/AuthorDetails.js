

const AuthorDetails= async (authorId) => {

    //OL23767A
    const url = `https://openlibrary.org${authorId}.json`


    return await fetch(url)
    .then(result => result.json())
    .then(data =>{
         return data;
    })
};

export default AuthorDetails;   