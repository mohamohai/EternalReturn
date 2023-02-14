import React ,{useState} from 'react';
import AWS from 'aws-sdk'

const S3_BUCKET ='jonghyunportfolio';
const REGION ='ap-northeast-2';


AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

const UploadImageToS3WithNativeSdk = () => {

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files);
    }

    const uploadFile = (file) => {
            for(let i =0; i<file.length ;i++){
            const params = {
                ACL: 'public-read',
                Body: file[i],
                Bucket: S3_BUCKET,
                Key: file[i].name
            };
            myBucket.putObject(params)
                .on('httpUploadProgress', (evt) => {
                    setProgress(Math.round((evt.loaded / evt.total) * 100))
                })
                .send((err) => {
                    if (err) console.log(err)
                })
         }
    }
    return <div>
        <div>Native SDK File Upload Progress is {progress}%</div>
        <input type="file" onChange={handleFileInput} multiple/>
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
}
export default UploadImageToS3WithNativeSdk;


// import React ,{useState} from 'react';
// import AWS from 'aws-sdk'

// const S3_BUCKET ='jonghyunportfolio';
// const REGION ='ap-northeast-2';


// AWS.config.update({
//     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
// })

// const myBucket = new AWS.S3({
//     params: { Bucket: S3_BUCKET},
//     region: REGION,
// })

// const UploadImageToS3WithNativeSdk = () => {

//     const [progress , setProgress] = useState(0);
//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleFileInput = (e) => {
//         setSelectedFile(e.target.files[0]);
//     }

//     const uploadFile = (file) => {
//         const params = {
//             ACL: 'public-read',
//             Body: file,
//             Bucket: S3_BUCKET,
//             Key: file.name
//         };
//         myBucket.putObject(params)
//             .on('httpUploadProgress', (evt) => {
//                 setProgress(Math.round((evt.loaded / evt.total) * 100))
//             })
//             .send((err) => {
//                 if (err) console.log(err)
//             })
//     }


//     return <div>
//         <div>Native SDK File Upload Progress is {progress}%</div>
//         <input type="file" onChange={handleFileInput}/>
//         <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
//     </div>
// }

// export default UploadImageToS3WithNativeSdk;






// import React , {useState} from 'react';
// import { uploadFile } from 'react-s3'



// //yarn add react-s3

// const S3_BUCKET ='jonghyunportfolio';
// const REGION ='ap-northeast-2';
// const ACCESS_KEY =process.env.REACT_APP_AWS_ACCESS_KEY_ID;
// const SECRET_ACCESS_KEY =process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;

// const config = {
//     bucketName: S3_BUCKET,
//     region: REGION,
//     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
// }

// const UploadImageToS3WithReactS3 = () => {

//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleFileInput = (e) => {
//         setSelectedFile(e.target.files[0]);
//     }

//     const handleUpload = async (file) => {
//         uploadFile(file, config)
//             .then(data => console.log(data))
//             .catch(err => console.error(err))
//     }

//     return <div>
//         <div>React S3 File Upload</div>
//         <input type="file" onChange={handleFileInput}/>
//         <button onClick={()=> handleUpload(selectedFile)}> Upload to S3</button>
//     </div>
// }

// export default UploadImageToS3WithReactS3;