import React from 'react'
import styles from './Post.module.css'
import {useNavigate } from 'react-router-dom'

const Post = ({post}) => {

    const navigation = useNavigate();
  const handleNavigate = (x)=>{
    navigation(`/blog/${x.slug}`, {state:{post: x}})
    console.log(x);
}

// const shortDesc = post.short.length > 80 ? post.short.slice(0,80) + "..." : post.short

  return (
    
    <div className={styles.container}>
        <img className={styles.imgf} src={`https://picsum.photos/id/${post.postImg}/200/300`} alt="" />
        <div className={styles.categorycss}>#{post.category}</div>
        <h3>{post.title}</h3>

        
        <div></div>
        <div>{post.short.substring(0,100)}...</div>
        
        
        <div className={styles.coscss} >
        <img className={styles.imgs} src={`https://i.pravatar.cc/50?img=${post.authorImg}`} alt="" />
        {post.author}
        <button className={styles.button} onClick={()=> handleNavigate(post)} key={post.title}>Więcej</button>
        
        </div>
        
    </div>
  )
}

export default Post