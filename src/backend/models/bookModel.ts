import pool from "../config/configDb.js";
import { Book } from "../types/Book.js";
import { DeleteResult } from "../types/DeleteResult.js";


export async function saveNewBook(book: Book): Promise<any> {
    const queryString = `INSERT INTO "books" ("bookName", "authorName", "authorFirstSurname", "pages", "publisher") VALUES ('${book.bookName}', '${book.authorName}', '${book.authorFirstSurname}', '${book.pages}', '${book.publisher}')`;
    const result = await pool.query(queryString);
    return result.rows;
}

export async function getBooks():Promise<any>{  
    const queryString = `SELECT * FROM "book"`;
    const result = await pool.query(queryString);
    return result.rows;
}

export async function findBookById(id:string):Promise<any>{
    const queryString = `SELECT * FROM "book" WHERE "id" = ${id}`;
    const result = await pool.query(queryString);
    return result.rows;
}

export async function deleteBookById(id: string): Promise<DeleteResult> {
    try {
        const queryString = `DELETE FROM "book" WHERE "id" = ${id}`;
        const result = await pool.query(queryString);
        
        if (result.rowCount && result.rowCount > 0) {
            return {
                success: true,
                message: 'Libro eliminado correctamente',
                rowsAffected: result.rowCount
            };
        } else {
            return {
                success: false,
                message: 'No se encontró el libro',
                rowsAffected: 0
            };
        }
    } catch (error) {
        return {
            success: false,
            message: `Error al eliminar el libro: ${(error as Error).message}`
        };
    }
}   