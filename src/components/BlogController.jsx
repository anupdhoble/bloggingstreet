import { Link} from "react-router-dom"
import "../styles/blogs.css"
import "../styles/blogcontroller.css"




export default function BlogController({isLogin}) {
    
  


    return(
        <div className="BlogController">
        <nav className="blog-controller-ul">
                      
        <Link to="/home/blogs">All Blogs</Link>
        <Link to="/home/login">{isLogin ? "Profile" : "Login"}</Link>
        {isLogin ? <Link to="/home/createblog">Create</Link> : ""}
  
                      
        </nav>
        
        </div>
    )
};
//

