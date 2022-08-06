import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <div className="spinner-grow" style={{width: '5rem' , height: "5rem"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}
