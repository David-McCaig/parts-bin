import './UploadPage.scss'
import Upload from '../../Components/Upload/Upload';

function UploadPage() {

    return (
        <>
 {/* Upload page
 <form method="POST" action="/upload" enctype="multipart/form-data">
<div> 
   <label>Select your profile picture:</label> <input type="file"   name="image" />
</div>
<div> 
    <input type="submit" name="btn_upload_profile_pic" value="Upload" /> 
</div>
</form> */}
{/* <UploadPage/> */}
<Upload/>
        </>
    );
}

export default UploadPage;
