import React, { FC } from 'react';
import DateModel from '../../classes/Date';
import { INote } from '../../types/types';
import Delete from '../UI/Delete/Delete';
import './OutputNotes.scss';

interface OtputNotesProps{
    notes: INote[];
    date: DateModel;
    setNotes: (events: INote[]) => void;
    setModal: (boolean) => void;
}

const OutputNotes:FC<OtputNotesProps> = ({notes, date, setNotes, setModal}) => {
    return (
        <div className='Notes'>
            {notes.map(note => 
                <div key={note.time+note.event} className='Note'>
                    <div>{note.event}</div>
                    <div>{note.time}</div>
                    <Delete setModal={setModal} notes={notes} setEvents={setNotes} note={note}></Delete>
                </div>
             )}
        </div>
    );
};

export default OutputNotes;