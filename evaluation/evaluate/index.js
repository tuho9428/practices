const API_URL = "http://localhost:3000/blogs";

const blogView = new BlogView();
const blogModel = new BlogModel();

const blogController = new BlogController(blogModel, blogView);