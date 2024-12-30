import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    price: { type: Number, required: true },
    genre: { type: String, required: true },
    pages: { type: Number, required: true },
    publisher: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    language: { type: String, required: true },
    isbn: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
