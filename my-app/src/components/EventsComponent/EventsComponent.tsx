import React, { FC, useEffect, useMemo, useState } from 'react';
import { getNotes } from '../../Api/PostService';
import { checkDayPassed, sortEventsOnTime } from '../../types/functions';
import { INote } from '../../types/types';
import CreateNote from '../CreateNote/CreateNote';
import OutputNotes from '../OutputNotes/OutputNotes';
import Additional from '../UI/Additional/Additional';
import MyModal from '../UI/MyModal/MyModal';
import Plus from '../UI/Plus/Plus';
import './EventsComponent.scss';
import FirstEventComponent from './FirstEventComponent';
import {Axios} from 'axios';
import DateModel from '../../classes/Date';

interface EventsComponentProps{
    date: DateModel;
    mouseOver: boolean;
}

const EventsComponent:FC<EventsComponentProps> = ({date, mouseOver}) => {
    const[modalPlus, setModalPlus] = useState<boolean>(false);
    const[modalAdditional, setModalAdditional] = useState<boolean>(false);
    const[notes, setNotes] = useState<INote[]>([]);
    useEffect(() => {
       getNotes(date).then(result =>  setNotes(sortEventsOnTime(result)));
    },[])
    let dayPassed: boolean = checkDayPassed(date);
    return (
      <div>
        <FirstEventComponent firstEvent={notes[0]}></FirstEventComponent>
        <div style={{display: dayPassed || !mouseOver ? 'none' : ''}} className='menuForEvents'> 
          <Plus dayPassed={dayPassed} setModal={setModalPlus}></Plus>
          <Additional visible={notes.length > 0} setModal={setModalAdditional}></Additional>
        </div>
        <MyModal visible={modalPlus} setVisible={setModalPlus}>
          <CreateNote date={date} setVisible={setModalPlus} notes={notes} setNotes={setNotes}></CreateNote>
        </MyModal>
        <MyModal visible={modalAdditional} setVisible={setModalAdditional}>
           <OutputNotes setModal={setModalAdditional} setNotes={setNotes} date={date} notes={notes}></OutputNotes>
        </MyModal>  
      </div>
    );
};

export default EventsComponent;