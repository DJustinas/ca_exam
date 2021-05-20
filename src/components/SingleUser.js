import {useHistory} from 'react-router-dom';

function SingleUser({user}) {
    const history = useHistory

    function changeRoute(){
        history.push('/user/'+user._id)
        console.log(user._id)
    }
/*pasitikrinti kas suluzta cia*/
    return (
        <div className="userCard" onClick={changeRoute}>
            <div>
                {user.title}
            </div>
            <div>
                {user.age}
            </div>


        </div>
    );
}

export default SingleUser;