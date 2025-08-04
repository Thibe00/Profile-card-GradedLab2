import { useState } from 'react'
import ProfileCard from './components/ProfileCard.jsx';
import './App.css'

function App() {
  
  return (
    <div className="App">
      <h1>Meet Our Team</h1>
      <div className="card-container">
        <ProfileCard
          name="Alex Johnson"
          title="Front-end Developer"
          image="https://randomuser.me/api/portraits/men/45.jpg"
          bio="alex.johnson@example.com"
        />
        <ProfileCard
          name="Maya Patel"
          title="UI/UX Designer"
          image="https://randomuser.me/api/portraits/women/65.jpg"
          bio="maya.patel@example.com"
        />
        <ProfileCard
          name="Ristian Cronald"
          title="back-end Designer"
          image="https://randomuser.me/api/portraits/men/65.jpg"
          bio="ristial.cronald@example.com"
        />
      </div>
    </div>
  )
  
}

export default App
