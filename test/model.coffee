mongorm = require '../index'
assert = require('assert')

class PagesModel extends mongorm.Model
    constructor = () ->
        @title = new mongorm.fields.string { required: true }
        @body = new mongorm.fields.text { required: true}

Pages = new PagesModel()
        
module.exports = 
    testsExists: () ->
        assert.isNotNull Pages, 'Pages should exist'
    
    testsNewReturnVal: () ->
        assert.eql true, Pages.new {title: "New Page"}, 'Pages.new should return true'
        
    testsModelGetBy: () ->
        testValue =
            param: 'title'
            value: 'New Page'
        assert.eql testValue, Pages.getBy('title', 'New Page'), 'output from function should be object'