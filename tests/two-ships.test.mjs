import assert from 'assert';
import { randFloatSpread, mapLinear, lerp, clamp } from '../games/two_ships/src/math.js';

describe('Tests Officiels - Two Ships Passing In The Night', () => {

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

    // MES TESTS PERSO

    it('lerp(0, 10, 0.5) should return 5', () => {
    assert.strictEqual(lerp(0, 10, 0.5), 5);
    });

    it('clamp(15, 0, 10) should return 10', () => {
    assert.strictEqual(clamp(15, 0, 10), 10);
    });

    it('mapLinear(5, 0, 10, 0, 100) should return 50', () => {
    assert.strictEqual(mapLinear(5, 0, 10, 0, 100), 50);
    });

    it('lerp(-10, 10, 0.5) should return 0', () => {
    assert.strictEqual(lerp(-10, 10, 0.5), 0);
    });

    it('clamp(-5, 0, 10) should return 0', () => {
    assert.strictEqual(clamp(-5, 0, 10), 0);
    });
    
});