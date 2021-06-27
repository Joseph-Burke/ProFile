function ProfileCard (props) {
  const {
    id, 
    firstName, 
    lastName, 
    username, 
    email, 
    contactNumber, 
    registerDate, 
    billingAddress
  } = props.user;

  return (
    <div className="profile-card">
      <h4 className="profile-card__title">
        {firstName} {lastName}
      </h4>

      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Number: {contactNumber}</p>
      <p>Date of registration: {registerDate}</p>
      <p>Address: {billingAddress}</p>
    </div>
  );
}

export default ProfileCard;