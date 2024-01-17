import { useCallback, useEffect, useState } from "react";
import BlogController from "./BlogController";
import { collection, deleteDoc, doc, getDocs, query, orderBy } from "firebase/firestore";
import { auth, db } from "../firebaseConfig.js";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export default function Blogs({ isLogin }) {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "blogs");

    const deletePost = useCallback(async (id) => {

        try {
            const postDoc = doc(db, "blogs", id);

            await deleteDoc(postDoc);
            toast.success("Blog Removed successfully");
        } catch (error) {
            console.log(error);
        }

    }, []);

    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(query(collection(db, "blogs"), orderBy("uploadTime", "desc")));
            setPostList(querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            })));
        };

        getPosts();
    }, [postsCollectionRef, deletePost]);
    // useEffect(() => {
    //     const getPosts = async () => {
    //         const data = await getDocs(postsCollectionRef);
    //         setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };

    //     getPosts();
    // }, [deletePost]);

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            <BlogController isLogin={isLogin} />

            <div className="blog-articles footer-fix max-width-1">

                {postLists.map((post) => {
                    return (
                        <article key={post.id} className="blog-article">
                            <div className="article-header">
                                <span className="article-title">
                                    {post.title}
                                </span>

                                <span className="article-right">
                                    <div className="article-author">@{post.author.name}</div>
                                    <div className="article-time">{post.uploadDate}</div>
                                </span>
                            </div>
                            <span className="deletePost">
                                {isLogin && post.author.id === auth.currentUser.uid && <button onClick={() => {
                                    deletePost(post.id);
                                }}>Delete</button>}
                            </span>
                            <div className="hr-nav m-auto"><hr /></div>
                            <div className="article-content">
                                {post.blogContent}
                            </div>
                        </article>
                    )
                })}

            </div>
        </>
    )
};
