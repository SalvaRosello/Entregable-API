import { getBooks, saveNewBook, findBookById, deleteBookById } from "../models/bookModel.js";
import { Book } from "../types/Book.js";
import { DeleteResult } from "../types/DeleteResult.js";


export async function newBook(book: Book):Promise<string>{
    try {
        const result = await saveNewBook(book);
        return result;
    } catch (error:any){
        if (error.code === "23505") {
            const columnMatch = error.detail.match(/Key \((.*?)\)=/);
            const columnBookName = columnMatch ? columnMatch[1] : 'campo';
            return `El ${columnBookName} ya existe en la base de datos`;
        }
        return error;
    }
      
}

export async function getAllBooks():Promise<string>{
    const result = await getBooks();
    return result;
}

export async function getBook(id:string):Promise<string>{
    const result = await findBookById(id);
    return result;
}

export async function deleteBook(id:string):Promise<DeleteResult>{
    const result = await deleteBookById(id);
    return result;
}