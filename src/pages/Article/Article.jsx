import React from 'react'
import "../Article/Article.scss"
import { Link } from 'react-router-dom'


const Article = () => {
  return (
    <div className="ArticleWrapper">
      <div className="ArticleContainer">
        <div className="Article">
          <p className='ArticleText'>Статьи</p>
        </div>
        <div className="ArticleWindows">
        <Link className='link' to='../winterrelax'>
          <div className="ArticleWindowsRelax ArticleWindowsChild transition">
            <p className='ArticleWindowsRelaxText '>Где отдохнуть в зимние выходные?</p>
          </div>
        </Link>
        <Link className='link' to=''>
          <div className="ArticleWindowsBoots ArticleWindowsChild transition">
            <p className='ArticleWindowsBootsText '>Фестиваль Уральские валенки в г. Куса</p>
          </div>
        </Link>
        <Link className='link' to=''>
          <div className="ArticleWindowsFood ArticleWindowsChild transition">
            <p className='ArticleWindowsFoodText '>Музей пельменя г. Миасс</p>
          </div>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Article