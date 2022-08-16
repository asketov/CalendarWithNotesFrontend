import { INote } from '../../types/types';
import './EventsComponent.scss';

interface FirstEventProps{
    firstEvent: INote;
}

const FirstEventComponent = ({firstEvent}) => {
    if(firstEvent!=null)
    return (
        <div className='eventBlock'>
        <div className='event'>{firstEvent.event.slice(0,21)}</div>
        <div className='time'>{firstEvent.time}</div>
      </div>
    );
    else return (
        <div className='eventBlock'>
            <div className='event'></div>
            <div className='time'></div>
        </div>
    );
};

export default FirstEventComponent;