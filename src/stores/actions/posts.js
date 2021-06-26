
export const fetchPosts = content => {
    return {
        type: "FETCH_POSTS"
    }
};

export const addPost = content => ({
    type: "ADD_POST",
    payload: {
        post: content.post
    }
});