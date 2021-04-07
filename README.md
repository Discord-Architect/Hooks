# Hooks
The `@discord-architect/Hooks` module gives you access to fragments of the framework such as the discord client, the command instance, events, middleware, etc.

In order to use it, you will need to install the module in your :
```
npm install @discord-architect/hooks
```
Or
```
yarn add @discord-architect/hooks
```

Using the module will allow you to gain access to parts of the framework that were previously inaccessible.

### Retrieve the instance of your bot
```typescript
import { useClient } from '@discord-architect/hooks'

const client = useClient()

// Your disord client instance
console.log(client)
```

### Retrieve the command or middleware list
```typescript
import { useCommands, useMiddlewares } from '@discord-architect/hooks'

const commands = useCommands()
const middlewares = useMiddlewares()

// Your commands map
console.log(commands)

// Your middleware map
console.log(middlewares)
```
