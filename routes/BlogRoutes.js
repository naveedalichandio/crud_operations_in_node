const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/BlogController");
 
const router = express.Router();
 
router.post("/blogs",createBlog);
// router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
 
module.exports = router;