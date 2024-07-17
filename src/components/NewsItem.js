import React from 'react'

const NewsItem=(props)=> {
  

    let{title, description, imageURL, newsURL}=props;

    return (
      <div>
       <div className="card" style={{width: "18rem"}}>
  <img src={!imageURL?"https://images.moneycontrol.com/static-mcnews/2024/06/20240621190101_Untitled-design-72.jpg":imageURL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsURL} target='_blank' className="btn btn-dark ">Read more</a>
  </div>
</div>
      </div>
      
    )
  }
export default NewsItem
