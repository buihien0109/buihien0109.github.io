export const sortTypes = {
    up: {
        class: 'sort-up',
        fn: (a, b) => a.color - b.color
    },
    down: {
        class: 'sort-down',
        fn: (a, b) => b.color - a.color
    },
    default: {
        class: 'sort',
        fn: (a, b) => a
    }
};