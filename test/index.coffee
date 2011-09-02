mongorm = require '../index'

class PageModel extends mongorm.Model
    constructor = () ->
        
        
Pages = new PageModel

console.log Pages.getBy 'title', 'New Page'