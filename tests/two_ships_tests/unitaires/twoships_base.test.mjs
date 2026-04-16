import assert from 'assert';
import { randFloatSpread, mapLinear, lerp } from '../../../games/two_ships/src/math.js';

describe('Two Ships - Mathématiques de base (Officiels)', () => {
    it('randFloatSpread(1) <= 1 returns true', () => {
        assert.ok(randFloatSpread(1) <= 1);
    });
    it('randFloatSpread(1) >= -1 returns true', () => {
        assert.ok(randFloatSpread(1) >= -1);
    });
    it('mapLinear(1,2,3,4,5) returns 3', () => {
        assert.strictEqual(mapLinear(1, 2, 3, 4, 5), 3);
    });
    it('mapLinear(1,20,3,40,5) returns 0.882352941176471', () => {
        assert.strictEqual(mapLinear(1, 20, 3, 40, 5), 0.882352941176471);
    });
    it('lerp(1,3,20) returns 41', () => {
        assert.strictEqual(lerp(1, 3, 20), 41);
    });
    it('lerp(1.3,-7,2) returns -15.3', () => {
        assert.strictEqual(lerp(1.3, -7, 2), -15.3);
    });
});