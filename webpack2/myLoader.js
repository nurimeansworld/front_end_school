module.exports = function myLoader(item) {
    console.log('hello my loader!');

    return item.replace('console.log(', 'alert(');
}