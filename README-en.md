# px2vw
css's px to vw. online edit:https://hezedu.github.io/px2vw/
## Usage
```js
px2vw(width, content);
// => str
```
### Options:
* `width`  **Number** Client width based on the source file(px)。默认`320`. 

### Example
```js
var str = px2vw('3px', {width:414, fixed:8});
console.log('width 414px, fixed 8:', str);
```
by file:
```js
var fs = require('fs');
var px2vw = require('px2vw');

var src = fs.readFileSync('./style.css').toString();
fs.writeFileSync('./style_px2vw.css', px2vw(src));
```
### Install
`npm install px2vw`