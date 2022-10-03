# typescript-crud-example
Basic CRUD server using TypeScript, class-validator, <a href="https://www.npmjs.com/package/mybatis-mapper">mybatis-mapper</a>.

## Usage

1. git clone ~
2. import sql file in db directory
3. change the .env
4. npm i
5. npm start

※ if MODULE_NOT_FOUND happens then go back to 5(You will do it only one time after clone this)

## Note
### Why MODULE_NOT_FOUND error can be occured

package.json:
```json
...
  "scripts": {
    "start": "concurrently \"tsc -w\" \"nodemon dist/app\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
```
`concurrently \"tsc -w\" \"nodemon dist/app\"`

`concurrently` executes the command (almost) at the same time. 

So `tsc -w` and `nodemon` dist/app will be executed simultaneously, it can be happen that 

`nodemon dist/app` can be executed before `tsc -w` is executed.

### Test with Postman

BODY should be raw-json type. 

```json
{
    "name": "John",
    "age": 44,
    "job": "Freeloader"
}
```

For the sake of class-validation. If you don't send the request with raw-json, validation will be failed because all integers which is supposed to be integer send as string.
