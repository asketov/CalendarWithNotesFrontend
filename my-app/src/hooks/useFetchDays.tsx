import { useMemo } from "react";
import { checkLeapYear, getInMonthAmountDays } from "../types/functions";
import { DaysOfWeek, IDay } from "../types/types";

export function useFetchDays(numberYearInSelect: number, numberMonthInSelect: number, month: IDay[]) 
{
    useMemo(() => {
      let myDate = new Date(numberYearInSelect, numberMonthInSelect, 1);
      let monthAmount = getInMonthAmountDays(numberMonthInSelect);
      if(checkLeapYear(myDate.getFullYear()) && numberMonthInSelect == 1) monthAmount++; //проверка високосного года
      for(let i = 1, dayOfWeek = myDate.getDay(); i <= monthAmount; i++)
      {
          month.push({numberDay: i, dayOfWeek: DaysOfWeek.get(dayOfWeek)});
          dayOfWeek == 6 ? dayOfWeek = 0 : dayOfWeek++;
      }
    }
  ,[numberMonthInSelect, numberYearInSelect])
}