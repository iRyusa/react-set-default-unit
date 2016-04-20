# Add a default unit to your react element's style

Remove warning from React by adding a default unit on your style

```javascript
const defaultUnit = require('react-set-default-unit')
const userInputStyle = "20 0em 20px 0"

console.log(defaultUnit(userInputStyle, "px")) // 20px 0em 20px 0px
```
