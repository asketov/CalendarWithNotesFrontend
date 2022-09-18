import { INote } from './../types/types';
import axios from 'axios';
import DateModel from '../classes/Date';

const url : string = "https://localhost:44340/note/";

export async function getNotes(date: DateModel) {
    let notes : INote[];
    await axios.get<INote[]>(
        url + 'getnotes/' + date.toNumber()).then(response => { notes = response.data })    
     return notes;
    
}

export async function postNote(note: INote, date: DateModel){
    let id : number;
    await axios.post(url + 'postnote/',{
        time: note.time,
        event: note.event,
        numberDate: date.toNumber()
    }).then((response) => id = response.data).catch((error) => console.log(error))
    return id;
}

export async function deleteNote(id: number){
    await axios.delete(url + 'deletenote/' + id).catch((error) => console.log(error))
}


