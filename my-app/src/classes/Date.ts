import React, { Component } from 'react'

export default class DateModel {
    year:number;
    month: number;
    day: number;
    
    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    toNumber() : number {
        return Number(String(this.month) + this.year + this.day);
    }

}
