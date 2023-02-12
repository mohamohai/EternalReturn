import './SNS.scss';
import { useState, useEffect, useRef, Component } from "react";
import { getDoc, doc } from 'firebase/firestore/lite';
import firebase from '../firebase.js'
function SNS(){
    async function getComments(nickname) {
        const comments = doc(firebase.db, 'account', nickname)
        const commentsSnapshot = await getDoc(comments)
      
        if (!commentsSnapshot.exists()) {
          return null
        }
      
        return commentsSnapshot.data()
      }
    return(
        <div className='SNS'>
            <div>L</div>
            <div>C</div>
            <div>R</div>
            {console.log(firebase)}
        </div>)
}export default SNS;
