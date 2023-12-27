import React from 'react'

// const formatter = new Intl.DateTimeFormat("en-US", {
//   day: "2-digit",
//   month: "long",
//   year: "numeric",
// });

const NewsItem = (props)=> {
  
    let {title, description, imageUrl, newsUrl, author, date, source} = props
    return (
      <div className='my-3'>
        <div className="card">
         <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
         }
         }>
        <span className="badge rounded-pill bg-danger"> {source}
              </span>
         </div> 
          <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toLocaleString("en-US", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</small></p>
              {/* <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {formatter.format(date)}</small></p>               */}
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
              {/* <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a> */}

          </div>
        </div>
      </div>
    )
  
}

export default NewsItem