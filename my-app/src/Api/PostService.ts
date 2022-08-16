import { INote } from './../types/types';
import axios from 'axios';
import DateModel from '../classes/Date';



export async function getNotes(date: DateModel) {
    
    let notes : INote[];
    await axios.get<INote[]>(
        'https://localhost:44340/api/note/getnotes/' + date.toNumber()).then(response => { notes = response.data })    
     return notes;
    
}

export async function postNote(note: INote, date: DateModel){
    let id : number;
    await axios.post('https://localhost:44340/api/note/postnote/',{
        time: note.time,
        event: note.event,
        numberDate: date.toNumber()
    }).then((response) => id = response.data).catch((error) => console.log(error))
    return id;
}

export async function deleteNote(id: number){
    await axios.delete('https://localhost:44340/api/note/deletenote/'+id).catch((error) => console.log(error))
}


