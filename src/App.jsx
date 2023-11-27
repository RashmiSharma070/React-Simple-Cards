import "./App.css";
import { Card } from "./components/Card";
import school_logo from "./images/school_logo.png";



function App() {
  return (
    <div className="App"> 
    <div> 
    <div className=" logo" >
    <img src={school_logo} alt="Sri Kumarams School" height="100px" width="100px" style={{ alignSelf: 'center' }}/>   
    </div>   
      <div className="row">
      
        <h1 className="header"> Exhibition 2023</h1>
        <h2 className="header"> Events</h2>
        <Card
          status="Ended"
          title="Presentations + Skits1"
          description="This is the card description section. You can add more details about the product here"
          venue="Venue:Physic Lab"
          timeslot=" 9:30 AM to 10:30 AM"
        />
        <Card
          status="Ended"
          title="Debates"
          description="This is the card description section. You can add more details about the product here"
          venue="Venue: Audetorium"
          timeslot=" 9:30 AM to 10:30 AM"
        />
        <Card
          status="Ended"
          title="Hindi Drama"
          description="This is the card description section. You can add more details about the product here"
          venue="Venue: Classroom 7 B"
          timeslot=" 9:30 AM to 10:30 AM"
        />
        <Card
          status="Ended"
          title="Musical"
          description="This is the card description section. You can add more details about the product here"
          venue="Venue: Classroom 8 A"
          timeslot=" 9:30 AM to 10:30 AM"
        />
        <Card
          status="Ended"
          title="Dance"
          description="This is the card description section. You can add more details about the product here"
          venue="Venue:Auditorium"
          timeslot=" 11:30 AM to 12:30 AM"
        />
        <Card
          status="Ended"
          title="Presentations + Skits1"
          description="This is the card description section. You can add more details about the product here"
          venue="Venue:Physic Lab"
          timeslot="9:30 AM to 10:30 AM"
        />
              </div>
    </div></div>
  );
}

export default App;
