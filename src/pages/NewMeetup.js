import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    //const history = useHistory(); //v5
    const navigate = useNavigate();  //v6


    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-ee27f-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                header:{
                    'COntent-Type': 'application/json'
                }
            }//標準JS 發出的http請求，也可以使用axios，此處的.josn是firebase的規定
            ).then(() => {
                // history.replace('/')  //v5
                navigate("/", { replace: true }); //v6
            }); 
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage;