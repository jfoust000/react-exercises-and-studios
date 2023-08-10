import data from '../data.json';
import { useState } from 'react';
import '../App.css';

export default function MyProjects() {

    const [index, setIndex] = useState(0);
    let currentProject = data.projects[index];

    function handleClick() {
        
        if (index < data.projects.length-1)
        {
            setIndex(index + 1);
            currentProject = data.projects[index];
        }
        else 
        {
            setIndex(0);
            currentProject = data.projects[index];
        }
         

    }

    return (

        <div className="resultsContainer">
            <button onClick={handleClick}>Next</button>
            <h2>Project:</h2>
            <table>
                <tr>
                    <td>{currentProject.gameTitle}</td>
                </tr>
                <tr>
                    <td>{currentProject.gameDeveloper}</td>
                </tr>
                <tr>
                    <td>{currentProject.releaseDate}</td>
                </tr>
                <tr>
                    <td><a href={currentProject.url} target="_blank">{currentProject.url}</a></td>
                </tr>
            </table>
        </div>

    );

}
