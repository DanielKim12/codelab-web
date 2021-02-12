import React, { useEffect, useState } from "react";
import "../../css/aboutUs.css"
import { Grid, Hidden } from "@material-ui/core";
import groupphoto from "./images/GroupPhoto1.png"
import essam from "./images/essam.jpeg"
import omid from "./images/omid.jpeg"
import james from "./images/james.jpg"
import edward from "./images/Edward.jpg"
import tom from "./images/tom.png"
import chris from "./images/chris.png"
import guk from "./images/guk.png"
import andy from "./images/andy.png"
import ayush from "./images/ayush.jpeg"
import jeffrey from "./images/jeffrey.png"
import henry from "./images/henry.png"
import gennifer from "./images/gennifer.jpg"
import minhTu from "./images/minh-tu.jpg"
import michelle from "./images/michelle.jpg"
import ishani from "./images/ishani.jpg"
import allie from "./images/allie.jpg"
import cathryn from "./images/cathryn.png"
import salma from "./images/salma.jpg"
import grisha from "./images/grisha.png"
import prahdeep from "./images/prahdeep.jpg"
import megan from "./images/megan.jpg"
import kiran from "./images/kiran.jpg"
import ke from "./images/ke.jpg"
import john from "./images/john.jpg"
import jagroop from "./images/jagroop.jpg"
import abhay from "./images/abhay.jpg"
import sienna from "./images/sienna.jpg"
import elizabeth from "./images/elizabeth.jpg"
import nicole from "./images/nicole.jpg"

function About() {

    return (
        <Grid container>
            <Grid container>
                <Grid container item xs={1} />
                <Grid container item xs={10} md={3}>
                    <h1 className="aboutus">
                        about us.
                    </h1>
                </Grid>
                <Grid container item xs={1}/>
                <Grid container item xs={12} md={6}>
                    <Hidden only={['xs']}>
                        <Grid container item sm={2} md={2} />
                    </Hidden>
                    <Grid container item xs={12} sm={8} md={10}>
                        <img className="topimage" src={groupphoto} alt="Club Meeting" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={1} md={2} />
            <Grid container item xs={10} md={8} justify="center" style={{marginBottom: "8rem"}}>
                <h2 className = "aboutustxt" >
                    Hey, we’re Codelab. The four of us—Essam, Omid, James, and Edward—went through our first year at UC Davis feeling like there wasn’t enough of a computer science community. With heavily theoretical coursework, it could be difficult to develop the skills associated with real world applications of our coding knowledge. <br /><br />
                    And so, we built CodeLab, a software development organization at UC Davis. In CodeLab, developers work in small teams on real-world projects, from web development to data science. Client Projects provide devlopers with the opportunity to contribute to companies, and Mentored Projects allow developers to learn new skills under the guidance of an experienced student. <br /><br />
                    Today, we are a team of driven computer science students creating pieces of code we are proud of. And through it all, we are always learning and always innovating.
                </h2>
            </Grid>
            <Grid container item xs={1} md={2} />

            <Grid container xs={1} />
            <Grid container xs={10} >
                <Grid container item xs={12}>
                    <h3 className="teamtoptext">
                        Our Team
                    </h3>
                </Grid>
 
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/essam-s-4253b1128/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto">
                        <img src={essam} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Essam Sleiman <br /></body1> 
                        <body1 className="title">President</body1>
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/omidmogasemi/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={omid} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Omid Mogasemi<br /></body1> 
                        <body1 className="title">VP of Projects</body1>       
                     </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/jamesjunaidi/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={james} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">James Junaidi <br /></body1> 
                        <body1 className="title">VP of Operations</body1>      
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/edwardchew8/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={edward} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Edward Chew <br /></body1> 
                        <body1 className="title">VP of External</body1>               
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/edwardchew8/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={gennifer} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Gennifer Hom<br /></body1> 
                        <body1 className="title">VP of Design</body1>               
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/jeffrey-zang/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={ishani} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Ishani Pandya <br /></body1> 
                        <body1 className="title">Project Manager</body1> 
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/andy-ren-147731180/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={michelle} alt='' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Michelle Tran<br /></body1> 
                        <body1 className="title">Project Manager</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/andy-ren-147731180/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={minhTu} alt='' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Minh-Tu Nguyen<br /></body1> 
                        <body1 className="title">Project Manager</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/andy-ren-147731180/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={allie} alt='' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Alexandria Yip<br /></body1> 
                        <body1 className="title">Project Manager</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/ayush-chakravarthy/")} style={{marginBottom: "1.25rem"}}>
                    <div >
                        <img src={ayush} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Ayush Chakravarthy<br /></body1> 
                        <body1 className="title">Developer</body1>                   
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/christopher-havens-52497919b/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={chris} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Chris Havens <br /></body1> 
                        <body1 className="title">Developer</body1>      
                     </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/jeffrey-zang/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={jeffrey} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Jeffrey Zang <br /></body1> 
                        <body1 className="title">Developer</body1> 
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/andy-ren-147731180/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={jagroop} alt='' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Jagroop Singh<br /></body1> 
                        <body1 className="title">Developer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/tom-abraham-82334b164/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={tom} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Tom Abraham <br /></body1> 
                        <body1 className="title">Developer</body1> 
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/andy-ren-147731180/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={andy} alt='' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Andy Ren <br /></body1> 
                        <body1 className="title">Developer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={guk} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name"> Guk Kim <br /></body1> 
                        <body1 className="title">Developer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={abhay} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Abhay Thacker<br /></body1> 
                        <body1 className="title">Developer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={grisha} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Grisha Bandodkar<br /></body1> 
                        <body1 className="title">Developer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={nicole} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Nicole Lazovsky<br /></body1> 
                        <body1 className="title">Developer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={john} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">John Jung<br /></body1> 
                        <body1 className="title">Developer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={salma} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Salma Hassen<br /></body1> 
                        <body1 className="title">Developer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={elizabeth} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Elizabeth Hopkins<br /></body1> 
                        <body1 className="title">Developer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={prahdeep} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Prahdeep Kainth<br /></body1> 
                        <body1 className="title">Developer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={megan} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Megan Chueh<br /></body1> 
                        <body1 className="title">Designer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={sienna} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Sienna Gonzalez<br /></body1> 
                        <body1 className="title">Designer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={ke} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Ke Lin<br /></body1> 
                        <body1 className="title">Designer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={kiran} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Kiran Poonia<br /></body1> 
                        <body1 className="title">Designer</body1>              
                    </div>
                </Grid>
                <Grid container item xs={12} md={3} className="membercontainer" onClick={() => window.open("https://www.linkedin.com/in/gukim1218/")} style={{marginBottom: "1.25rem"}}>
                    <div className="teamPhoto" >
                        <img src={cathryn} alt='Man Smiling' style={{marginBottom: "0.5rem", borderRadius: "10px"}} />
                        <body1 className="name">Cathryn Ng<br /></body1> 
                        <body1 className="title">Designer</body1>              
                    </div>
                </Grid>
            </Grid>
            <Grid container xs={1} />
        </Grid>
    )
}

export default About 