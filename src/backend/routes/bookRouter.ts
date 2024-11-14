import Express from 'express';
import { validateNumericParams } from '../middlewares/validateNumericParams.js';
import { DeleteResult } from '../types/DeleteResult.js';
import { deleteBook, getAllBooks, getBook, newBook, updateBook } from '../controllers/bookController.js';
import { Book } from '../types/Book.js';

const bookRouter = Express.Router();

bookRouter.get("/", async (req: Express.Request, res: Express.Response) => {
    const result = await getAllBooks();
    res.json(result);
  });
  
bookRouter.get("/:id", validateNumericParams, async (req: Express.Request, res: Express.Response) => {
    const result = await getBook(req.params.id);
    res.send(result);
  });
 
bookRouter.post("/", async (req: Express.Request, res: Express.Response) => {
    const book: Book = {bookName: req.body.bookName, authorName: req.body.authorName, authorFirstSurname: req.body.authorFirstSurname, pages: req.body.pages, publisher: req.body.password};
    const result = await newBook(book);
    res.send(result);
});

bookRouter.delete("/:id", validateNumericParams, async (req: Express.Request, res: Express.Response) => {  
    const result: DeleteResult = await deleteBook(req.params.id);
    let statusCode=200;
    if(!result.success && result.rowsAffected==0) statusCode=404;
    if(!result.success && !("rowsAffected" in result)) statusCode=500;
    res.status(statusCode).json({message: result.message});
});

export default bookRouter;

bookRouter.put("/:id", validateNumericParams, async (req: Express.Request, res: Express.Response) => {
    const book: Book = {id: req.params.id, bookName: req.body.bookName, authorName: req.body.authorName, authorFirstSurname: req.body.authorFirstSurname, pages: req.body.pages, publisher: req.body.publisher};
    const result = await updateBook(book);
    res.send(result);
});