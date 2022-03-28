// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
});


// Exercise 2
describe('checks if sayHello is a defined function', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
        // Exercise 3
    });
    it('should return "Hello, Jane!', function () {
        expect((console.assert(sayHello("Jane") === "Hello, Jane!")) === undefined).toBe(true)
    });
    it("should return Hello, Alex! when called with \"Alex\" ", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it("should return Hello, Pat! when  called with \"Pat\" ", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it("should return \'Hello, World!\' when called", function() {
        expect(sayHello()).toBe("Hello, World!")
    });
    it("should return \'input is null \' when called with null", function() {
        expect(sayHello(null)).toBe("input is null")
    });
    it("should return \'input is null \' when called with null", function() {
        expect(sayHello()).toBe("input is null")
    });
    it("should return \'input is empty string \' when called with empty string", function() {
        expect(sayHello("")).toBe("input is empty string")
    });
    it("should return \'input is a number \' when called with a number", function() {
        expect(sayHello(2.3)).toBe("input is number")
    });
    it("should return \'input is loosely a number \' when called with wrapped number", function() {
        expect(sayHello("5")).toBe("input is number")
    });
    it("should return \'input is array \' when called with an array", function() {
        expect(sayHello()).toBe("input is array")
    });
    const person = {
        first: "Billy",
        middle: "Bob",
        last: "Thornton",
        age: 9999
    }
    it("should return \'input is object \' when called with an object", function() {
        expect(sayHello(person)).toBe("input is object")
    });
    it("should return \'input is function \' when called with a function", function() {
        expect(sayHello(helloWorld())).toBe("input is function")
    });
});