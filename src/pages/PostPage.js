import React from 'react'
import MainTemplate from '../templates/MainTemplate'
import { useLocation } from 'react-router-dom'
import styles from './PostPage.module.css'
import {useNavigate} from 'react-router-dom';

const PostPage = () => {

    // const {title} = useParams();
    // console.log(title);
    // const location = useLocation();
    // console.log(location);
    const { state: { post } } = useLocation();

    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
      };
    
    return (

        <MainTemplate>

            <div className={styles.container}>
                <div className={styles.containersecond}>

                    <div className={styles.author}>
                        <h1>{post.title}</h1>
                        <h2>#{post.category}</h2>
                        <h2>Autor:{post.author}</h2>
                        <div >
                            <img className={styles.imgs} src={`https://i.pravatar.cc/50?img=${post.authorImg}`} alt="" />
                           
                        </div>
                        
                    </div>
                </div>


                <div className={styles.postcss}>
                    <img src={`https://picsum.photos/id/${post.postImg}/200/300`} alt="" />
                    
                    <div dangerouslySetInnerHTML={{ __html: post.content }} ></div>
                    
                </div>
                <div className={styles.divbutt}> 
                <button className={styles.button} onClick={navigateHome}>Powrót</button></div>
                
            </div>
        </MainTemplate>
    )
}

export default PostPage