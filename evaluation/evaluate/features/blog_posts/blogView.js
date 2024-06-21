class BlogView {
    constructor(){
        this.titleInput = document.getElementById("title");
        this.contentInput = document.getElementById("content");
        this.dateInput = document.getElementById("date");
        this.submitBtn = document.getElementById("submit-btn");
        this.deleteBtnBtn = document.querySelector(".post-item__delete");
        this.editBtn = document.querySelector(".post-item__edit");
        this.blogPostList = document.getElementById("blog-posts-list");
        this.addBlogForm = document.getElementById("blogs-form");
   
        //
        this.titleUpdate = document.getElementById("title-update");
        this.contentUpdate = document.getElementById("content-update");
        this.dateUpdate = document.getElementById("date-update");
        this.updateBlogForm = document.getElementById("blogs-form-update");
 
    }

    renderPostElement(blog){
        const {id , title, content, date} = blog;
        const blogPost = document.createElement("div");
        blogPost.classList.add("post-item");
        blogPost.id = id;

        const blogTitle = document.createElement("div");
        blogTitle.classList.add("post-item__title");
        blogTitle.textContent = title;

        const blogContent = document.createElement("div");
        blogContent.classList.add("post-item__content");
        blogContent.textContent = content;

        const blogDate = document.createElement("div");
        blogDate.classList.add("post-item__date");
        blogDate.textContent = date;

        const editBtn = document.createElement("button");
        editBtn.classList.add("post-item__edit");
        editBtn.textContent = "Edit";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("post-item__delete");
        deleteBtn.textContent = "Delete";
        
        blogPost.append(blogTitle, blogContent, blogDate, editBtn, deleteBtn);
        this.blogPostList.appendChild(blogPost);
    }

    deleteBlogElements(blogId){
        const blogPost = document.getElementById(blogId);
        blogPost.remove();
    }

    updateBlogElements(blogId) {
        const blogPost = document.getElementById(blogId);
        const blogTitle = blogPost.querySelector(".post-item__title");
        const blogContent = blogPost.querySelector(".post-item__content");
        const blogDate = blogPost.querySelector(".post-item__date");
    
        // Update title if input is not empty
        if (this.titleUpdate.value.trim() !== "") {
            blogTitle.textContent = this.titleUpdate.value.trim();
        }
    
        // Update content if input is not empty
        if (this.contentUpdate.value.trim() !== "") {
            blogContent.textContent = this.contentUpdate.value.trim();
        }
    
        // Update date if input is not empty
        if (this.dateUpdate.value.trim() !== "") {
            blogDate.textContent = this.dateUpdate.value.trim();
        }
    }
    


}