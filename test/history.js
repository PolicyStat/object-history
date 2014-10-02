/* eslint-env node, browser, mocha */
/* eslint no-unused-expressions: 0 */
var expect,
    History;

expect = require("chai").expect;
History = require("..");

describe("History", function () {
    var history,
        origin,
        kfir;

    origin = {
        name: "Shahar"
    };

    it("Should error, not given an object when initializing", function () {
        expect(function () {history = new History([]);}).to.throw(TypeError);
    });

    it("should instantiate, given an object", function () {
        expect( history = new History(origin) ).to.be.an.instanceOf(History);
    });

    it("should be initialized with length of 1", function () {
        expect( history.length() ).to.equal(1);
    });

    // Input is cloned.
    it("should clone the origin", function () {
        expect( history.get() ).to.not.equal(origin);
    });

    it("should deep equal the initial input", function () {
        expect( history.get() ).to.deep.equal(origin);
    });

    it("should error, not given an object when adding", function () {
        expect( function () {history.add(function () {});} ).to.throw(TypeError);
    });

    kfir = {name: "Kfir"};

    it("should return position when adding", function () {
        expect( history.add(kfir) ).to.equal(1);
    });

    it("should increment length in adding", function () {
        expect( history.length() ).to.equal(2);
    });

    it("should return a clone when getting", function () {
        expect( history.get() ).to.not.equal(kfir);
    });

    it("should return a deeply equal clone of added", function () {
        expect( history.get() ).to.deep.equal({name: "Kfir"});
    });

    it("should return position when going back", function () {
        expect( history.backward() ).to.equal(0);
    });

    it("should get the correct object after going back", function () {
        expect( history.get() ).to.deep.equal(origin);
    });

    it("should not change length by going back", function () {
        expect( history.length() ).to.equal(2);
    });

    it("should not allow going back when at dawn of history", function () {
        expect( history.backward() ).to.be.false;
        expect( history.position() ).to.equal(0);
        expect( history.get() ).to.deep.equal(origin);
    });

    it("should go forward", function () {
        expect( history.forward() ).to.equal(1);
        expect( history.get() ).to.deep.equal({name: "Kfir"});
        expect( history.length() ).to.equal(2);
        expect( history.position() ).to.equal(1);
    });

    it("should add a third object", function () {
        expect( history.add({name: "Eden"}) ).to.equal(2);
        expect( history.length() ).to.equal(3);
        expect( history.get() ).to.deep.equal({name: "Eden"});
    });

    it("should go back multiple times sequentially", function () {
        expect( history.backward() ).to.equal(1);
        expect( history.backward() ).to.equal(0);
        expect( history.get() ).to.deep.equal(origin);
    });

    it("should remove forward history when adding", function () {
        expect( history.add({initials: "EKS"}) ).to.equal(1);
        expect( history.length() ).to.equal(2);
        expect( history.forward() ).to.be.false;
        expect( history.get() ).to.deep.equal({initials: "EKS"});
    });
});
