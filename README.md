# Fisherman Required Prefixe

## Setup

### Adding the middleware to fisherman

```javascript
const fisherman = require("fisherman-discord.js")
var bot = new fisherman.Fisherman({prefixes: ["!", "cat!"]});
const _reqPrefixe = require("required-prefixe-fisherman");
var requirePrefixe = new _reqPrefixe({sendCode: true, code: 789}) //it will trigger the event fisherCode with a InvalidPrefixeException if the required prefixe is not respected
//If sendCode is set to false, it will just block the middleware chain and don't trigger a fishercode
bot.use(requirePrefixe);
```

### Setting up the command

```javascript
var register = bot.createRegister('test', 'test') //Create a register named "test"
register.textCommand('ping', {locales: {requiredPrefixe: "!"}, function (req, res) { //the command will be only trigerred if the prefixe "!" is used
  var current = Date.now()
  res.send('Pinging......').then((message) => {
    message.edit((Date.now() - current) + 'ms')
  })
})
```

This modules is used as example, and can be improved manually, like for example supporting and array of required prefixes