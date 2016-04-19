# Add a default unit to your react element's style

Remove warning from React by adding a default unit on your style

```javascript
const unitHarmonizer = require('../index')
const userInputStyle = "20 0 20px 0"

console.log(unitHarmonizer(userInputStyle, "px")) // 20px 0px 20px 0px
```
