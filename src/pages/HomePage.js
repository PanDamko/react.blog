import React from 'react'
import MainTemplate from '../templates/MainTemplate'
import {posts} from "../Fdb"
import Post from '../components/Post'
import styles from './HomePage.module.css'


const HomePage = () => {



  
  return (
    <MainTemplate>
    <div className={styles.contariner}>
      <h1>Strona główna</h1>
      <h2>Najnowsze posty</h2></div>
      <div className={styles.colum}>
      {posts.map((post)=> <Post post={post}/>)}
      </div>
      </MainTemplate>
  )
}

export default HomePage