import './ProfileCard.css'
import profile_icon from '../Assets/Mark.jpg'

export default function ProfileCard(){
    return(<div classname="pc">
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={profile_icon} alt="" />
            <div className="profile-title">Mark John</div>
            <div className="profile-description">
                I am a founder , chairman & chief executive officiar of ZA company,CEO and product architect of DE company.
            </div>
        </div>
        <div className="profile-button"><a href="mailto:mark@gmail.com">Contact Me</a></div>

   </div>
    );
}