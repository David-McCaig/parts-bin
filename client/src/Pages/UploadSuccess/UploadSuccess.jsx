/* eslint-disable jsx-a11y/iframe-has-title */
import "./UploadSucess.scss"
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function UploadSucess() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
            window.scrollTo(0, 0)
        }, 2550)
    }, [navigate])

    return (
        <>
            <iframe className="upload_success" src="https://embed.lottiefiles.com/animation/11263" alt="Uploading image in progress" > </iframe>
        </>
    );
}

export default UploadSucess;