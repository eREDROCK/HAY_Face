// @ts-nocheck
import Webcam from "react-webcam";
import React, { useRef, useState,useEffect } from 'react';
import './App.css';
import axios from "axios";
import Cookies from "js-cookie";
import { send } from "process";

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: "user",
};

const WebCamera = () => {
  const webcamRef = useRef<Webcam>(null);
  const [pic, setPic] = useState<string | null>(null);
  const postImageURL = 'http://localhost:8000/getpic';

  useEffect(() => {
    // インターバルの設定
    const shotPicInterval = setInterval(() => {
      const imageSrc = webcamRef.current?.getScreenshot();
      setPic(imageSrc);

      const csrfToken = Cookies.get('csrftoken');
      const senddata = new FormData();
      senddata.append('picbase64', imageSrc);

      axios
        .post(postImageURL, senddata, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          const responsedata = response.data;
          const emotion = responsedata.emotion;
          document.getElementById('emotion').textContent=emotion;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);

    // コンポーネントがアンマウントされたときにインターバルをクリア
    return () => clearInterval(shotPicInterval);
  }, []); // 空の依存関係配列は一度だけ実行されることを保証

  return (
    <>
      <Webcam
        audio={false}
        width={540}
        height={360}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      {/* <div>
        <img src={pic} alt="Screenshot" />
      </div> */}
      <h1 id='emotion'></h1>
    </>
  );
};

export default WebCamera;