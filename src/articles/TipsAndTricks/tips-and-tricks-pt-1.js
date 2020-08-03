import { type, lang } from '../types';

export const TipsAndTricksPt1 = [
    {
        type: type.Heading,
        heading: '7 JavaScript Tips and Tricks',
        subheading: 'Tips, trick and hacks to make your life easier.'
    },
    {
        type: type.TitledCodeParagraph,
        heading: 'Using Set to filter duplicates.',
        text:
            'Set and spread operators were introduced in ES6 and can be leveraged to filter non-unique entities from an array.',
        language: lang.JavaScript,
        source: `const arr = [1, 1, 2, 5, 8, 8, 9];
 const filtered = [...new Set(arr)];
 console.log(filtered); // [1, 2, 5, 8, 9]`
    },
    {
        type: type.TitledCodeParagraph,
        heading: 'Convert `arguments` to an array.',
        text: `The arguments object is an array-like object that contains all the values passed to a function. The values can be accessed and the length can be
 determined, but since the object does not implement Object.iterator no other array properties can be used. Luckily, converting it into a proper array is easy as pie.`,
        language: lang.JavaScript,
        source: 'const array = Array.prototype.slice.call(arguments)'
    },
    {
        type: type.TitledCodeParagraph,
        heading: 'Spreading params into an array.',
        text:
            'Alternative to the above, function arguments can be converted into an array by using the rest operator.',
        language: lang.JavaScript,
        source: `function(...params) { 
     // ...do stuff
 }`
    },
    {
        type: type.TitledCodeParagraph,
        heading: 'Filter falsy values from array.',
        text:
            'There is a very simple trick to achieve this, by using `filter`.',
        language: lang.JavaScript,
        source: `const arr = [0, 'some text', false, null, undefined, 99, true];
 const filtered = arr.filter(Boolean);
 console.log(filtered); // ["some text", 99, true]`
    },
    {
        type: type.TitledCodeParagraph,
        heading: 'Short-circuit evaluation.',
        text: `By now we are all versed in ternary operators. If not, this is an easy way to write simple conditionals, such as 'a ? b : c'.
 This roughly means 'If a, then b, else c'. Somtimes this can be simplified further by using only the '||' or '&&; operator.
  If using '||', the first truthy value will be returned and if using '&&' the first falsy value will be returned.`,
        language: lang.JavaScript,
        source: `const a = [1, 2, 3, 4];
 console.log((a || []).length); // 3, since a us truthy
 const b = undefined;
 console.log((b || []).length); // 0, since b is falsy`
    },
    {
        type: type.TitledCodeParagraph,
        heading: 'Aggregate all array values.',
        text:
            'A simple method to aggregate (or sum) all the values in an array is by using a reducer.',
        language: lang.JavaScript,
        source: `const numbers = [1, 2, 2, 1];
 const total = numbers.reduce((a, b) => a + b);
 console.log(total) // 6`
    },
    {
        type: type.TitledCodeParagraph,
        heading: 'Create a true dictionary.',
        text: `JavaScript objects always have a couple of Prototype keys and methods, such as '__proto__' or 'hasOwnproperty'. If you ever need to 
 create a 'pure' dictionary there is a little hack that can create an object without of these.`,
        language: lang.JavaScript,
        source: `const dictionary = Object.create(null);`
    }
];
