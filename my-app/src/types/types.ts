export interface IDay {
    numberDay: number;
    dayOfWeek: string;
    events?: INote[];
}

export interface INote {
    time: string;
    event: string;
    id?: number;
}

export interface IMonth {
    days: IDay[];
} 

export const AmountDaysInMonth = new Map<number, number>(
    //January = 31, February = 28, March = 31, April = 30, May = 31, Juny = 30, July = 31, August = 31, September = 30, October = 31, November = 30, December = 31
   [[0, 31], [1, 28], [2, 31], [3, 30], [4, 31], [5, 30], [6, 31], [7, 31], [8, 30], [9, 31], [10, 30], [11, 31]]
);

export const DaysOfWeek = new Map<number, string>(
   [[0, 'Sun'],[1, 'Mon'],[2, 'Tue'], [3, 'Wed'], [4, 'Thu'], [5, 'Fri'], [6, 'Sat']]
);



export const Months = [
    'January', 'February', 'March', 'April', 'May', 'Juny', 'July','August', 'September', 'October', 'November', 'December'
]