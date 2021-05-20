import {useState as state} from 'react';
import UploadForm from "../components/UploadForm";
import UploadPreview from "../components/UploadPreview";
import http from "../plugins/Fetch"

function Upload() {
    const [title, setTitle] = state('')
    const [age, setAge] = state([])
    const [email, setEmail] = state([])
    const [password, setPassword] = state([])

    function upload(){
        const userInfo = {
            title,
            age,
            email,
            password
        }
        http.post('/adduser', userInfo).then(res => {
            console.log(res)
        })
    }


    return <div className="d-flex">
        <UploadForm
            titleSet={setTitle}
            ageSet={setAge}
            emailSet={setEmail}
            passwordSet={setPassword}
            upload={upload}
        />


        <UploadPreview
            title={title}
            age={age}
            email={email}
            password={password}
            />
    </div>

}

export default Upload;