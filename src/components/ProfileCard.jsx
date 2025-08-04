import './ProfileCard.css';

function ProfileCard(teamMember) {
  return (
    <div className="profile-card">
      <img src={teamMember.image} alt={teamMember.name} className="profile-image" />
      <h2>Name: {teamMember.name}</h2>
      <h4>Job title: {teamMember.title}</h4>
      <p>bio/contact info: {teamMember.bio}</p>
    </div>
  );
}

export default ProfileCard;