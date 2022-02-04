import {getDayOfWeek} from '../transform-date.js';
import expect from 'expect';

describe ('Get the day of the week', function() {
    it('should return Friday for last day of 2021', function() {
        const d = new Date(2021, 11, 31);
        expect(getDayOfWeek(d)).toEqual('Friday');
    });
    it('should return Saturday for first day of 2022', function() {
        const d = new Date(2022, 0, 1);
        expect(getDayOfWeek(d)).toEqual('Saturday');
    });
    
})