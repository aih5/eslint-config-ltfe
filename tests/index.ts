const tuple = <T extends string[]>(...args: T) => args;

const ButtonTypes = tuple('default', 'primary', 'link');

export type ButtonType = typeof ButtonTypes[number];

export interface BaseButtonProps {
    type?: ButtonType;
    loading?: boolean | { delay?: number };
    prefixCls?: string;
    className?: string;
    danger?: boolean;
    block?: boolean;
}

export default function fizzbuzz() {
    for (let i = 1; i < 101; i++) {
        if (i % 15 === 0) {
            return 'FizzBuzz';
        } else if (i % 3 === 0) {
            return 'Fizz';
        } else if (i % 5 === 0) {
            return 'Buzz';
        } else {
            // return i;
        }
    }
}
