
import React,{FC, useState} from 'react';
import { postNote } from '../../Api/PostService';
import DateModel from '../../classes/Date';
import { sortEventsOnTime } from '../../types/functions';
import { INote } from '../../types/types';
import MyButton from '../UI/Button/MyButton';
import MyInput from '../UI/Input/MyInput';
import './CreateNote.scss';

interface CreateNoteProps{
    notes: INote[];
    setVisible: (boolean) => void;
    date: DateModel;
    setNotes: (events: INote[]) => void;
}

const CreateNote:FC<CreateNoteProps> = ({notes, setVisible, date, setNotes}) => {

    const [note, setNote] = useState<INote>({event:'', time:''});

    const addNewEvent = async (e) => {
        if(note.event!='')
        {
            e.preventDefault();
            setVisible(false);
            await postNote(note, date).then(response => {note.id = response; setNote(note);})
            .then(() => setNotes(sortEventsOnTime([...notes ,note])))
            //.then(() => setNote({event:'', time:''}));
            setNote({event:'', time:''})
        }
    }
    
    return (
        <form className='inside'>
          <MyInput 
            value={note.event} 
            onChange={e => setNote({...note, event: e.target.value})}
            type="textarea" 
            placeholder="Название события"
            required
          />
          <MyInput
            value={note.time}
            onChange={e => setNote({...note, time: e.target.value})}
            type="time" 
            />
            <MyButton onClick={addNewEvent}>Добавить</MyButton>
        </form>
    );
};

export default CreateNote;