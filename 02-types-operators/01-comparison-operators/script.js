console.log(1 < 2 < 3); // true; < and > are left-associative
console.log(3 < 2 < 1); // true; this is equivalent to `false < 1` coerced to 0 < 1, which is true

/* How are various things coerced/converted to boolean values? */
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('')); // false

var a;

a =
    a ||
    "This value will only be assigned to variable a if it's undefined, null, NaN, or an empty string.";

console.log(a);
