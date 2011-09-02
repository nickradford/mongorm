# mongORM

mongORM is an Object-Relational mapping for MondoDB built on Node.js with Coffeescript

## Use
    
    mongorm = require 'mongorm'
    class PagesModel extends mongorm.Model
        constructor = () ->
            @title = new mongorm.fields.string
            @body  = new mongorm.fields.text
            
    PagesModel = new PagesModel()
    
    page = PagesModel.new
        title: "mongorm"
        body: """
              mongorm is an Object-Relational mapping for MondoDB built
              on Node.js with Coffeescript
              """
    page.save()
    
    console.log page
    # => {title: "mongorm", body: "mongorm is an ..."}