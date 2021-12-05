// It used from "boards.controller", "boards.service"

// // Before connect DB
// // Interface doesn't be used after use Entity
// // Ex this file name: boards.model.ts
// export interface Board {
//     id: string;
//     title: string;
//     description: string;
//     status: BoardStatus;
// }

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}
console.log(typeof(BoardStatus))