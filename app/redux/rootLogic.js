import userLogic from './User/UserLogic';
import notesLogic from './Notes/NotesLogic';

export default [
    ...notesLogic,
    ...userLogic
];
