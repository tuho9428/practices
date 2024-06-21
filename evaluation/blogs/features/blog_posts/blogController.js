class BlogController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.initApp();
    // Initialize blogId variable to store the currently selected blog ID
    this.currentBlogId = null;
  }

  initApp() {
    this.setUpEvents();
    this.fetchBlogs();
  }

  setUpEvents() {
    this.setUpEditEvent();
    this.setUpAddEvent();
    this.setUpDeleteEvent();
    this.setUpUpdateEvent();
  }

  fetchBlogs() {
    blogAPI.fetchBlogsAPI().then((blogs) => {
      this.#model.setBlogs(blogs);
      blogs.forEach((blog) => {
        this.#view.renderPostElement(blog);
      });
    });
  }

  setUpAddEvent() {
    this.#view.addBlogForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newBlog = {
        title: this.#view.titleInput.value,
        content: this.#view.contentInput.value,
        date: this.#view.dateInput.value,
      };

      blogAPI.postBlogPostAPI(newBlog).then((_newBlog) => {
        this.#model.addBlog(_newBlog);
        this.#view.renderPostElement(_newBlog);

        // Clear input fields after form submission using the function
        this.clearInputFields();
      });
    });
  }

  setUpDeleteEvent() {
    this.#view.blogPostList.addEventListener("click", (e) => {
      if (e.target.classList.contains("post-item__delete")) {
        const blogId = e.target.parentElement.getAttribute("id");
        console.log(blogId);
        blogAPI.deleteBlogAPI(blogId).then(() => {
          this.#model.removeBlog(blogId);
          this.#view.deleteBlogElements(blogId);
        });
      }
    });
  }

  // edit
  setUpEditEvent() {
    this.#view.blogPostList.addEventListener("click", (e) => {
      console.log("clicked");
      if (e.target.classList.contains("post-item__edit")) {
        this.currentBlogId = e.target.parentElement.getAttribute("id");
        console.log(this.currentBlogId);
        const blogPost = this.#model
          .getBlogs()
          .find((blog) => blog.id === this.currentBlogId);

        // Populate input fields with existing values
        this.#view.titleUpdate.value = blogPost.title;
        this.#view.contentUpdate.value = blogPost.content;
        this.#view.dateUpdate.value = blogPost.date;
      }
    });
  }

  // do update
  setUpUpdateEvent() {
    this.#view.updateBlogForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const blogId = this.currentBlogId;
      const updatedFields = {
        title: this.#view.titleUpdate.value,
        content: this.#view.contentUpdate.value,
        date: this.#view.dateUpdate.value,
      };

      blogAPI.updateBlogAPI(blogId, updatedFields).then((updatedBlogPost) => {
        this.#model.updateBlog(updatedBlogPost);
        this.#view.updateBlogElements(blogId);

        // Clear input fields after form submission using the function
        this.clearUpdateFields();
      });
    });
  }

  // Function to clear input fields
  clearInputFields() {
    this.#view.titleInput.value = "";
    this.#view.contentInput.value = "";
    this.#view.dateInput.value = "";
  }

    // Function to clear input fields
    clearUpdateFields() {
        this.#view.titleUpdate.value = "";
        this.#view.contentUpdate.value = "";
        this.#view.dateUpdate.value = "";
      }
}
