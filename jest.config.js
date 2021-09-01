module.exports = {
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90
        },
        "./src/utils": {
            branches: 99,
            functions: 99,
            lines: 99,
            statements: 99
        }
    }
};