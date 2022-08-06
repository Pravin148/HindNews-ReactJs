import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {

        let {title, description, urlToImage, newsUrl,publishedAt} = this.props;

        return (
            <div>
                <div className="card mb-3" style={{maxWidth: "740px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src= {urlToImage} className="img-fluid rounded-start" alt="..."/>
                            <p className="card-text my-3 mb-0 mx-3"><small className="text-muted">{new Date(publishedAt).toGMTString()}</small></p>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description} </p>
                                <a href={newsUrl} rel="noreferrer" target ="_blank" className='btn btn-sm btn-primary'>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
