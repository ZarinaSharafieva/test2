import styles from './Banner.module.css';
import './Banner.module.css'
function Banner(){
  return(
      <div className="banner__content">
        <img src="../public/banner_img/banner.png" alt="" />
        <div className="centered">
          <img className='img' src="../public/banner_img/logo.png" alt="" />
          <h2 className='h2'>БРЕНД ОДЕЖДЫ</h2>
          <p className="center"><button className="button">Перейти в категории</button></p>
        </div>
      </div>
  )
}

export default Banner