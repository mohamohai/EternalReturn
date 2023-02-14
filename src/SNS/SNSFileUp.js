import React, { useState } from "react";
// import * as Api from "../../api";
import AWS from "aws-sdk";

function SNSFileUp({ ownerData, setOwnerData }) {
    const region = "ap-northeast-2";
    const bucket = "jonghyunportfolio";

    AWS.config.update({
        region: region,
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const handleFileInput = async (e) => {
        const file = e.target.files[0];

        // await Api.put(`user/${ownerData._id}`, {
        //     image: ownerData._id,
        // });

        const upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: bucket, // 버킷 이름
                Key: ownerData._id + ".png", // 유저 아이디
                Body: file, // 파일 객체
            },
        });

        const promise = upload.promise();
        promise.then(
            function () {
                // 이미지 업로드 성공
                window.setTimeout(function () {
                    window.location.reload();
                }, 2000);
            },
            function (err) {
                // 이미지 업로드 실패
            }
        );
    };

    return (
        <>
            <input
                type="file"
                onChange={handleFileInput} />
        </>
    );
}

export default SNSFileUp;