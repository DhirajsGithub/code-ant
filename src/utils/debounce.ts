const debounce = (fn: Function, delay: number) => {
    let timer;
    return function (...args: any) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}
export { debounce };