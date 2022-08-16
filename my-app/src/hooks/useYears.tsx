import { useMemo } from 'react';

export const useYears = (YearsArray: number[], YearNow: number) => {
    useMemo( () => {
        for(let i = YearNow-40; i < YearNow+40; i++)
        {
          YearsArray.push(i);
        };
 }, [YearNow]);
}

