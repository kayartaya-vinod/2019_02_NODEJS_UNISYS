console.log('module sleep loaded into vm');

const sleep = (duration = 1000) => {
    let startTime = Date.now();
    while ((Date.now() - startTime) <= duration);
}

module.exports = sleep;
// ES6 style
// export default sleep;