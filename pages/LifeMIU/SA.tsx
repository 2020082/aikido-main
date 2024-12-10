import React from "react";
import ImageCarousel from "@/components/imageCarousel";
import styles from "./Life.module.css"
import Image from "next/image";
import Link from "next/link";
import { StyleTwoTone } from "@mui/icons-material";
const SAPage: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.backgroundImg}>
            <ImageCarousel
                textContent="Student Activity"
                textdesc=""
                image={"/LifePage/Lifebg.jpg"}
                />
            </div>
            
            {/* YouTube 비디오 삽입 */}
                    <div className={styles.cultureNight}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/lVPjOz80nnM"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className={styles.CNtxt}>
                    Culture Night
                    <div className={styles.uppertxt}>
                        <br />
                        Through Culture Night, you will know different cultures from six nationalities. Different traditional clothes, songs, instruments, and foods are here. Korean Hanbok, Russian Song with strong rhythm, Chinese Dragon Dance, Central Asian Special Meal, Mongolian Game and American Cookies are all here in one place.
                        </div>
                    </div>
                    </div> 
                    <div className={styles.artfestival}>
                    <Image src="/LifePage/SA/artfestival.jpg" alt="" width={400} height={100}/>
                    <div className={styles.CNtxt}>
                    art festival
                    <div className={styles.uppertxt}>
                        <br />
                        Here you can shine like a star, it’s a great opportunity to show off your talents on the stage. There are over 10 departments’ teams ready to compete with you, so enjoy and be the star you are meant to be.
                        </div>
                    </div>
                    </div>
                    <div className={styles.openday}>
                    <Image src="/LifePage/SA/openday.jpg" alt="" width={400} height={100}/>
                    <div className={styles.CNtxt}>
                    open day
                    <div className={styles.uppertxt}>
                        <br />
                    It is an event for the people outside the school. Through this event, people learn more about MIU, school activities, and student lives and participate in the international food festival, departments’ classes, and taking a free English test.  
                    </div>
                    </div>
                    
                    </div> 
            <div className={styles.basketball}>
                <div className={styles.SAText}>
                    basketball team
                    <div className={styles.bbtxt}><br />The Mongolia International University (MIU) men’s basketball team represents MIU in the University Student League. <br /><br />
                <span className={styles.textsize}>Basketball coach: </span>
                Ariunbold Erdene <br />
                2012-2014 Institute of Railway <br />
                2014-2017 Etugen University <br />
                2018-2019 International Basketball Coach Academy /USA/ <br /><br />
                <span className={styles.textsize}>Achievements: </span>
                 <br />
                2018, 2019, 2020 Mongolian Premier League – 2nd Place</div>
                </div>
     
                <Image src="/LifePage/SA/basketball.jpg" alt="" width={400} height={100}/>
                
            </div>
            <div className={styles.club}>
                <div className={styles.SAText}>student clubs
                <div className={styles.clubtxt}>
                    <br />
                We aim to win while also focusing on how sports can enhance health, build character, and create community. <br /> <br />
                – Drama &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Soccer/Futzal/ <br />
                – Ping-Pong &nbsp; &nbsp; &nbsp; &nbsp;  - Dance
                </div>
                </div>
                
               
                
            <Image src="/LifePage/SA/club.jpg" alt="" width={400} height={100}/>
            </div>
            <div className={styles.cdp}>
                <div className={styles.cdptxt}>
                    Career Development Program
                    <div className={styles.cdptxt1}>
                        <br />
                    The Career Development Program (CDP) provides MIU students from all departments with the resources to help them in their career development.
                    Through annual workshop sessions and Job Fairs, MIU helps current students and alumni to discover what careers fit their interests and abilities.
                    At CDP workshops, students approaching graduation are assisted in how to fill out job applications, how to write their CVs, and how to go about the interview process.
                    <br /><br />
                    – Career Test &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    – Skill Test
                </div>
                    </div>
                
            <Image src="/LifePage/SA/CDP.jpg" alt="" width={400} height={100}/>
            </div>
        </div>
        
    );
};

export default SAPage;