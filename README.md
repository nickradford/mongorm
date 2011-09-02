# mongORM

mongORM is an Object-Relational mapping for MondoDB built on Node.js with Coffeescript

## Use

```coffeescript    
mongorm = require 'mongorm'

PagesModel = class extends mongorm.Model
    constructor = () ->
        @title = new mongorm.fields.string
        @body  = new mongorm.fields.text
        

page = PagesModel.new
    title: "mongorm"
    body: """
          mongorm is an Object-Relational mapping for MondoDB built
          on Node.js with Coffeescript
          """
page.save()

console.log page
# => {title: "mongorm", body: "mongorm is an ..."}
```