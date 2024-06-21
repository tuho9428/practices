/*
The Immediately Invoked Function Expression (IIFE) is used 
to create a closure for the postAPI module. 
This helps to encapsulate the functionality within the module 
and avoid polluting the global scope with variables 
and functions that are only relevant to the postAPI
*/

const blogAPI = (() => {
    const BASE_POST_API = "http://localhost:3000/blogs";

    // fetchPostsAPI
    const fetchBlogsAPI = async () => {
        try {
            const response = await fetch(BASE_POST_API);
            const posts = await response.json();
            return posts; 
        } catch (error) {
            console.error("Error fetching posts:", error);
            throw new Error("Failed to fetch posts");
        }
    }

    // POST a blog post
    const postBlogPostAPI = async (newPost) => {
        try {
            const response = await fetch(BASE_POST_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPost),
            });
            const newBlogPost = await response.json();
            return newBlogPost;
        } catch (error) {
            console.error("Error POST a blog post:", error);
            throw new Error("Failed to POST a blog post");
        }
    };

    // DELETE a blog post
    const deleteBlogAPI = async (blogId) => {
        return fetch(`${BASE_POST_API}/${blogId}`,{
            method: "DELETE",
        }).then((res) => res.json());
    };

    // PATCH to update a blog post
    const updateBlogAPI = async (blogId, updatedFields) => {
        const url = `${BASE_POST_API}/${blogId}`;

        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedFields),
        });

        const updatedBlogPost = await response.json();

        return updatedBlogPost;
    };


    return {
        fetchBlogsAPI,
        postBlogPostAPI,
        deleteBlogAPI,
        updateBlogAPI,
    }

})();
