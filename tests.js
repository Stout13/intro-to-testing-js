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
    it("should return Hello, Alex! when \"Alex\" is called", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it("should return Hello, Pat! when \"Pat\" is called", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
});



