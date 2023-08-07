import styles from './HobbyLinks.module.css';

export default function HobbyLinks () {

    let hobbyLinks = ["https://www.youtube.com/@joeljumps", "https://www.udemy.com/", "https://github.com/jfoust000", "https://steamcommunity.com/id/JoelFoust/"];


    return (

        <div class={styles.linkContainer}>
            <h3 class={styles.hobbyHeader}>My Hobbies</h3>
            <a href={hobbyLinks[0]} target=" _blank">JoelJumps YouTube Gaming Channel</a><br></br>
            <a href={hobbyLinks[1]} target=" _blank">Taking Courses on Udemy</a><br></br>
            <a href={hobbyLinks[2]} target=" _blank">Sharing Code on GitHub</a><br></br>
            <a href={hobbyLinks[3]} target=" _blank">Playing Games on Steam</a><br></br>
        </div>

    );

}