
//Modello ricevuto dal backend, corrisponde all'UserDTO del Backend
export interface Todo {
    id: number,
    content: string,
    dueDate: string,
    createdAt: string,
    status: string,
    userId: number
}