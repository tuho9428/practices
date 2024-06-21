class BlogModel {
    #blogs;
    constructor() {
        this.#blogs = [];
    }

    setBlogs(blogs){
        this.#blogs = blogs;
    }

    get length(){
        return this.#blogs.length;
    }

    getBlogs() {
        return [...this.#blogs];
    }

    addBlog(newBlog) {
        this.#blogs.push(newBlog);
    }

    updateBlog(updatedBlog) {
        this.#blogs = this.#blogs.map((blog) => {
            if (blog.id === updatedBlog.id) {
                return { ...blog, ...updatedBlog };
            }
            return blog;
        });
    }

    removeBlog(id) {
        this.#blogs = this.#blogs.filter((blog) => {
            return blog.id !== id;
        });
    }
}