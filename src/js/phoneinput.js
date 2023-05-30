
Inputmask({
    mask: '+7 (%99) 999-99-99',
    autoUnmask: true,
    inputmode: 'tel',
    definitions: {
        '~': {
            validator: "[78]"
        },
        '%': {
            validator: "[98]"
        }
    },
    clearIncomplete: true
}).mask('input[type="tel"]');

