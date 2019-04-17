class ConfigError extends Error {
    constructor() {
        super();
        this.message = 'you are using the wrong JDK';
    }
}

function compileAndroidCode() {
    throw new ConfigError;
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(ConfigError);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});

function numberFixed(n, digits) {
    n.toFixed(digits);
}
test('RangeError', () => {
    const PI = 3.14159;

    expect(() => numberFixed(PI, 100000)).toThrow();
});