import { useParams } from 'react-router-dom';

function Profile() {
    const { nickname } = useParams();
    console.log('nickname:', nickname);
    return <div className="profile">Hello profile, {nickname}</div>;
}

export default Profile;
