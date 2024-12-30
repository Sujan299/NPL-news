import Book from '../models/book.model.js'

// get a book
export const get_a_book = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        console.log("Hello world")
        res.status(200).json(book);
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).json({ message: 'Failed to fetch book', error });
    }
};

// get all category

export const get_all_books = async (req, res)=>{
    try{
        const books = await Book.find();
        res.status(200).send(books);
    }catch(err){
        console.log("Can not get all books", err);
    }
}