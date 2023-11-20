import { useState, useEffect } from 'react';
import axios from 'axios';


const BookList = () => {

    const [books, setBook] = useState([]);
    useEffect(() => {
        getBooks();
    }, []);


    const getBooks = async () => {
        const response = await axios.get('http://localhost:7777/books')
        // console.log(response.data);
        setBook(response.data.data);



    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <h1>BookList</h1>
                <table className="table is-fullwidth is-hoverable is-striped">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Judul</th>
                            <th>Penerbit</th>
                            <th>Deskripsi</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    {books.map((book, index) => (
                        <tr key={book.id}>
                            <td>{index + 1}</td>
                            <td>{book.judul}</td>
                            <td>{book.penerbit}</td>
                            <td>{book.deskripsi}</td>
                            <td>  
                                <button class="button is-black">Edit</button>
                                <button class="button is-info">Delete</button>
                            </td>
                        </tr> 
                        ))}  
                </table>
            </div>
        </div>
    );
};

export default BookList;
