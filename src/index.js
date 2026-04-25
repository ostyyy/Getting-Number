'use strict';

function findExpression(value) {
    function tryPath(current, expression) {
        if (current === value) return expression;
        if (current > value) return null;

        return (
            tryPath(current * 3, `(${expression}*3)`) ||
            tryPath(current + 5, `(${expression}+5)`)
        );
    }
    return tryPath(1, '1');
}

console.log(findExpression(13));
