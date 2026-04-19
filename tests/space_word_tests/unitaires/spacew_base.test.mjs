import { expect } from 'chai';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rectIntersect = (x1, y1, w1, h1, x2, y2, w2, h2) => {
    return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
};
const circleIntersect = (x1, y1, r1, x2, y2, r2) => {
    const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    return dist < r1 + r2;
};
const timeToString = (time) => {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    return `${formattedMM}:${formattedSS}:00`;
};


describe('Space Word - Tests de Base (Sujet)', () => {
    it('getRandomInt(-42, 42) < 43 returns true', () => {
        expect(getRandomInt(-42, 42)).to.be.below(43);
    });
    it('getRandomInt(42, 42) returns 42', () => {
        expect(getRandomInt(42, 42)).to.equal(42);
    });
    it('rectIntersect(1,1,2,1,4,1,1,2) returns false', () => {
        expect(rectIntersect(1,1,2,1,4,1,1,2)).to.be.false;
    });
    it('timeToString("toto") returns "NaN:NaN:00"', () => {
        expect(timeToString("toto")).to.equal("NaN:NaN:00");
    });
});