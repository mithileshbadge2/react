import { createRoot } from "react-dom/client";
import "./style.css";

function App3() {
    return (
        <div>
            <Card></Card>
        </div>
    )
   
}

function Card(){
    return (
        <div className="card">
            <Avatar/>
            <div className="data">
                <Intro/>
                <SkillList/> 
            </div>
        </div>
    );


}


// let skillAndColor = [
//     {skill:"react",color:"green"},
//     {skill:"html",color:"red"},
//     {skill:"css",color:"yellow"},
//     {skill:"python",color:"orange"}

// ]



function Avatar(){
    return <img className="avatar" src="images.jpeg" alt ="virat kohli"/>
}

function Intro (){
    return (
        <div>
            <h1>Virat Kohli</h1>
            <p>
                Virat kolhi is an indian cricketer
            </p>
        </div>
    );
}

function SkillList(){
    return (
        <div className="skill-list">
            <Skill skill = "React" color = "red"/>
            <Skill skill = "Javascript" color = "green"/>
            <Skill skill = "HTML" color = "yellow"/>
            <Skill skill = "CSS" color = "orange"/>
            <Skill skill = "SQL" color = "blue"/>
        </div>

    )
}

function Skill(props){
    return (
        <div className="skill" style = {{backgroundColor:props.color}}>
            <span>{props.skill}</span>
        </div>
    )

}



export default App3