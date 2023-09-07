const { Router } = require('express')
const { getAllBlog, createBlog, updateBlog, viewById, deleteBlog} = require('../service/blog-service.js')


const blogRouter = Router()


blogRouter.get('/', getAllBlog)
blogRouter.post('/create', createBlog)
blogRouter.put('/update/:id', updateBlog)
blogRouter.get('/:id', viewById)
blogRouter.delete('/:id', deleteBlog)


module.exports = blogRouter