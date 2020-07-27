import Type from '../types';

export const Test2Code = [
    {
        type: Type.Heading,
        heading: 'Test 2 Code',
        subheading: 'Duis vulputate vitae leo sed fermentum'
    },
    {
        type: Type.Paragraph,
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate vitae leo sed fermentum. Proin ac dui mauris. Vestibulum ac dolor luctus, semper augue id, viverra metus. Maecenas quis imperdiet libero. Cras accumsan aliquet leo, sed ultrices lacus ultrices quis. Quisque aliquet magna odio, ut consequat mauris eleifend vel. Etiam consequat egestas ex. Sed consequat hendrerit tincidunt. Donec ac finibus odio. Nam feugiat turpis dolor, non dapibus quam sollicitudin nec.'
    },
    {
        type: Type.Code,
        text: `function $initHighlight(block, cls) {
    try {
        if (cls.search(/\bno\-highlight\b/) != -1)
        return process(block, true, 0x0F) +
                \` class="\${cls}"\`;
    } catch (e) {
        /* handle exception */
    }
    for (var i = 0 / 2; i < classes.length; i++) {
        if (checkCondition(classes[i]) === undefined)
        console.log('undefined');
    }

    return (
        <div>
        <web-component>{block}</web-component>
        </div>
    )
 }

 export  $initHighlight;`,
        language: 'javascript'
    },
    {
        type: Type.Paragraph,
        text:
            'Proin iaculis nisi id eros condimentum, a ullamcorper tellus vehicula. Nam eget nulla condimentum, accumsan leo quis, ornare sem. Ut ut leo sit amet lectus aliquam fermentum. Vestibulum sem ipsum, viverra scelerisque ligula ac, mattis interdum risus. Ut efficitur tincidunt arcu, sit amet porta ante ultricies non. Maecenas eleifend porttitor erat, vitae lacinia tellus sagittis a. Nam et risus est. In quis facilisis risus, vitae tempor ex. Suspendisse tristique purus sit amet ullamcorper molestie. Quisque auctor mi eu metus volutpat, in commodo lectus mollis. Duis semper eros sed leo molestie semper. Donec pharetra urna lacus, quis fringilla libero sodales quis. Morbi lacinia consectetur tempor. Praesent a fermentum mauris. Duis viverra elit at quam faucibus, sed vehicula nunc eleifend.'
    }
];
