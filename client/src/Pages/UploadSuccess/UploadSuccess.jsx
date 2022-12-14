import "./UploadSucess.scss"
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";


function UploadSucess() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 2550)
    }, [])

    return (
        <>
            <iframe className="upload_success" src="https://embed.lottiefiles.com/animation/11263" alt="Uploading image in progress" > </iframe>
        </>
    );
}

export default UploadSucess;