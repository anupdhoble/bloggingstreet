import BlogController from "./BlogController";
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup } from "firebase/auth";
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import '../styles/bloglogin.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast}from 'react-toastify';


export default function Bloglogin({ isLogin, setIsLogin }) {
    let navigate = useNavigate();
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            localStorage.setItem("isLogin", true);
            setIsLogin(true);
            toast(`Welcome ${auth.currentUser.displayName} 👋`);
            navigate("/home/login");
        } catch (error) {
            toast.error("Error occurred. Try again");
            console.error("Google Sign-in Error:", error);
        }
    }
    
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsLogin(false);
            toast.success("Logged out successfully 👋");
        })
        .catch((error)=>{
            toast.error("Error occurred. Try again");
        });
    }

    const UserProfile = ({ user}) => {
        return (
            <div className="user-profile">
                <h2>User Profile</h2>
                <div className="user-info">
                    <div className="user-avatar">
                        <img src={user.photoURL} alt="Profile" />
                    </div>
                    <div className="user-details">
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Display Name:</strong> {user.displayName}</p>
                        <p><strong>Email Verified:</strong> {user.emailVerified ? "Yes" : "No"}</p>
                    </div>
                </div>
                <button className="signOutBtn" onClick={signUserOut}>Sign Out</button>
            </div>
        );
    };
    
    
    return (
        <div className="footer-fix">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            <BlogController isLogin={isLogin}/>

            {!isLogin && <div className="loginPage">
                <p>Sign In With Google To Post Articles</p>
                <button className="login-with-google-btn" onClick={signInWithGoogle}>
                    Sign in With Google
                </button>

            </div>}
            {isLogin &&  <UserProfile user={auth.currentUser}/>}
        </div>
    )
};
