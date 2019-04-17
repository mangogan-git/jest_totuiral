function timer(cb) {
    console.log('timer start.');
    setTimeout(() => {
        console.log('timer stop');
        return cb && cb('end');
    }, 6000);
}
export { timer };