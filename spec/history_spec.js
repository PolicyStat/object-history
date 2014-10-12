/* eslint-env node, browser, jasmine*/
/* eslint no-unused-expressions: 0 */
var H;

H = require("..");

describe("History", function () {
    "use strict";
    var h,
        origin,
        kfir;

    origin = {
        name: "Shahar"
    };

    it("Should error, not given an object when initializing", function () {
        expect(function () {h = new H([]);}).toThrow();
    });

    h = new H(origin);

    it("should be initialized with length of 1", function () {
        expect( h.length() ).toEqual(1);
    });

    // Input is cloned.
    it("should clone the origin", function () {
        expect( h.get() ).not.toBe(origin);
    });

    it("should deep equal the initial input", function () {
        expect( h.get() ).toEqual(origin);
    });

    it("should error, not given an object when adding", function () {
        expect( function () {h.add(function () {});} ).toThrow();
    });

    kfir = {name: "Kfir"};

    it("should return position when adding", function () {
        expect( h.add(kfir) ).toEqual(1);
    });

    it("should increment length in adding", function () {
        expect( h.length() ).toEqual(2);
    });

    it("should return a clone when getting", function () {
        expect( h.get() ).not.toBe(kfir);
    });

    it("should return a deeply equal clone of added", function () {
        expect( h.get() ).toEqual({name: "Kfir"});
    });

    it("should return position when going back", function () {
        expect( h.backward() ).toEqual(0);
    });

    it("should get the correct object after going back", function () {
        expect( h.get() ).toEqual(origin);
    });

    it("should not change length by going back", function () {
        expect( h.length() ).toEqual(2);
    });

    it("should not allow going back when at dawn of history", function () {
        expect( h.backward() ).toBe(false);
        expect( h.position() ).toEqual(0);
        expect( h.get() ).toEqual(origin);
    });

    it("should go forward", function () {
        expect( h.forward() ).toEqual(1);
        expect( h.get() ).toEqual({name: "Kfir"});
        expect( h.length() ).toEqual(2);
        expect( h.position() ).toEqual(1);
    });

    it("should add a third object", function () {
        expect( h.add({name: "Eden"}) ).toEqual(2);
        expect( h.length() ).toEqual(3);
        expect( h.get() ).toEqual({name: "Eden"});
    });

    it("should go back multiple times sequentially", function () {
        expect( h.backward() ).toEqual(1);
        expect( h.backward() ).toEqual(0);
        expect( h.get() ).toEqual(origin);
    });

    it("should remove forward history when adding", function () {
        expect( h.add({initials: "EKS"}) ).toEqual(1);
        expect( h.length() ).toEqual(2);
        expect( h.forward() ).toBe(false);
        expect( h.get() ).toEqual({initials: "EKS"});
    });
});
