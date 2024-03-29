import '../styles/about.css';
export default function About() {
    return(
        <>
        <div id="pagecontent">
        <h1 className="titles">Technologies Used:</h1>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>ReactJs</li>
        </ul>
        <h1 className="titles">Made By:</h1>
        <center><img src="./img/anup.png" alt="" id="anup"/></center>
        <ul>
            <li>Anup Dhoble</li>
            <li><a href="https://www.instagram.com/anup_dhoble/" target="_blank" rel="noreferrer">@anupdhoble15</a></li>
            <li>anupdhoble@gmail.com</li>
            <li>Second Year CSE Student At Shri Ramdeobaba College OF Engineering Nagpur.</li>
        </ul>
        <h1 className="titles">Hosted On:</h1>
        <ul>
            <li>Github Pages (27/11/2022)</li>
        </ul>
        <h1 className="titles">Disclaimer</h1>
        <h2 className="disclaimer">A fun project to test my skills. <br/>All rights of songs and logos are reserverd with
            respective parties.<br/>We respect your copyrights and would like to here out issues(if any).
        </h2>
        <h1 className="titles">Services used:</h1>
        <a href="https://www.vecteezy.com/" target="_blank" rel="noreferrer">vecteezy.com</a>
        <br/>
        <a href="https://logomakr.com/" target="_blank" rel="noreferrer">logomakr.com</a>
    </div>
        </>
    )
};
