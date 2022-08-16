import { faTrash, faTrashAlt, faTrashArrowUp, faTrashRestore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { deleteNote } from '../../../Api/PostService';
import DateModel from '../../../classes/Date';
import { INote} from '../../../types/types';
import './Delete.scss';

interface DeleteProps{
    note: INote;
    setEvents: (events: INote[]) => void;
    setModal: (boolean) => void;
    notes: INote[];
}

const Delete:FC<DeleteProps> = ({note, notes, setEvents, setModal}) => {
    async function removeNote(){
        await deleteNote(note.id);
        let index: number = notes.findIndex(noteSelect => noteSelect.id === note.id);
        notes.splice(index, 1);
        setEvents([...notes]);
        if(notes.length===0) setModal(false);
    }
    return (
        <div onClick={() => removeNote()} className='delete'>
            <FontAwesomeIcon className='trash' icon={faTrashAlt}></FontAwesomeIcon>
        </div>
    );
};

export default Delete;