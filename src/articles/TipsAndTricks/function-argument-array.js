import { type, lang } from '../types';

export const ConvertFunctionArgumentsIntoArrays = [
    {
        type: type.Heading,
        heading: 'How to convert function arguments into an array',
        subheading:
            'The most common and easiest methods of converting function parameters into arrays.'
    },
    {
        type: type.Paragraph,
        text: `From time to time we have functions with a potentially unknown amount of parameters. In this case the parameters will be accessible via an 'arguments' object. The 
 problem that we face, however, is that this object does not implement Object.iterator, and thus cannot perform any of the usual array operations. Here are a couple of ways
  that we can convert this object into a real array.`
    },
    {
        type: type.TitledParagraph,
        heading: 'Using the Array.slice method.',
        text: `Using Array.slice returns an array without affecting the original object, unlike Array.splice. The call method simply calls a function.
 Here we call the slice method of the Array prototype, returning us an Array from the original arguments object.`
    },
    {
        type: type.Code,
        language: lang.JavaScript,
        text: 'const args = Array.prototype.slice.call(arguments)'
    },
    {
        type: type.TitledParagraph,
        heading: 'Using the Array.from method.',
        text:
            'The Array.from method creates a new Array based on another Array or Array-like object. This is basically a shallow-copy of the original object.'
    },
    {
        type: type.Code,
        language: lang.JavaScript,
        text: 'const args = Array.from(arguments)'
    },
    {
        type: type.TitledParagraph,
        heading: `Using the 'spread' operator.`,
        text: `Simply put, the rest operator allows us to pass an undetermined number of parameters to a function and access them via an array. This is definitely
 my preferred method of achieving this goal.`
    },
    {
        type: type.Code,
        language: lang.JavaScript,
        text: `function(...parameters) { 
     // ...do stuff
 }`
    }
];
