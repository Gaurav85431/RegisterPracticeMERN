import React from 'react'
import Register from './component/Register'
// import Login from './component/Login'
import RegisterUser from './newComponeent/RegisterUser'
// import LoginUser from './newComponeent/LoginUser'rs
import Login from './newComponeent/Login'
import NmAge from './newComponeent/NmAge'
import PDF from './PDF'
import Notes from './Notes/Notes'
import SeeNotes from './Notes/SeeNotes'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Image from './Post Image/Image'
import GetImage from './Post Image/GetImage'
import GetMyImage from './Post Image/GetMyImage'
import GetNotes from './Notes/GetNotes'
import PostNotes from './Notes/PostNotes'
import SendNotes from './Notes/SendNotes'
import CallRandom from './RandomWla/CallRandom'
import RandomDisp from './RandomWla/RandomDisp'
import RandomShow from './RandomWla/RandomShow'
import GetData from './RandomWla Axios/GetData'
import GetOneImage from './RandomWla Axios/GetOneImage'
import SetName from './NameEmail/SetName'
import GetName from './NameEmail/GetName'
import TitlePost from './titleDescImg/TitlePost'
import TitleGet from './titleDescImg/TitleGet'
import TitleImageget from './titleDescImg/TitleImageget'
import Post from './TitDesImgNew/Post'
import Get from './TitDesImgNew/Get'


function App() {
  return (
    <div>

      {/*
      Old Register and login without token
      <Register />
      <br />
      <hr></hr>
      <Login /> */}

      {/* new Register and Login with token */}
      <RegisterUser />
      <br /> <br /> <br /> <hr /><hr />

      {/* <LoginUser /> */}

      <Login />

      <hr /><hr />


      {/* voter */}
      <NmAge />


      <hr /><hr /><hr /><hr />

      {/* pdf*/}
      <PDF />


      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />
      {/* notes */}
      <Notes />
      {/* <SeeNotes /> */}

      {/* <Link to={'/notes'}>{<SeeNotes />}</Link>/ */}
      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />
      {/* Get Notess using AXIOS */}
      <GetNotes />
      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />
      {/* Post Notes using AXIOS */}
      <p>Post notes.</p>
      <PostNotes />


      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />
      {/* send notes */}
      <p>Send Notes</p>
      <SendNotes />


      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />

      <Image />

      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />
      {/* Get image */}
      {/* <GetImage /> */}

      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr />
      <GetMyImage />



      <br /><br /><br />
      {/* Random wla */}
      <p>Random Called</p>
      {/* <CallRandom /> */}

      <p>show dataa</p>
      {/* <RandomDisp /> */}

      {/* <RandomShow /> */}


      {/* -----------------------------Random wla using Axios---------------------------------------- */}

      <GetData />

      {/* image integrate */}

      <GetOneImage />



      {/* Name and Email wala --------- */}
      {/* FETCH SE CHECK IT */}
      {/* <SetName /> */}

      {/* <GetName /> */}


      {/* ------------------------TITLE DESCRIPTON IMAGE----------------------- */}
      <hr /><hr /><hr /><hr /><hr /><br /><br /><br /><br /><br /><br /> {/* POst */}
      <TitlePost />

      <hr /><hr /><hr /><hr /><hr /><br /><br /><br /><br /><br /><br /> {/* Get */}
      <TitleGet />

      <hr /><hr /><hr /><hr /><hr /><br /><br /><br /><br /><br />

      {/* Get image only */}
      <TitleImageget />




      {/* *************************title image only******************* */}
      <Post />

      <Get />

      <BrowserRouter>
        <Routes>
          {/* <Route path='/notes' element={<Notes />}></Route> */}
          <Route path='/see-notes' element={<SeeNotes />}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App