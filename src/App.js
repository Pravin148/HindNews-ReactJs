import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewsBundle from './components/NewsBundle';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  apiKey = "319c50da4fcb49379235c26460094b22"
  state ={
    progress :0
  }

 setProgress = (progress)=>{
   this.setState({progress:progress})
 }
  render() {
    return (

      <BrowserRouter>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />

        <Routes>
          <Route exact path="/" element={<NewsBundle apiKey={this.apiKey} setProgress = {this.setProgress}  key="general" country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<NewsBundle apiKey={this.apiKey} setProgress = {this.setProgress}  key="business" country="in" category="business" />}> </Route>
          <Route exact path="/entertainment" element={<NewsBundle apiKey={this.apiKey} setProgress = {this.setProgress}  key="entertainment" country="in" category="entertainment" />}> </Route>
          <Route exact path="/health" element={<NewsBundle apiKey={this.apiKey} setProgress = {this.setProgress}  key="health" country="in" category="health" />}> </Route>
          <Route exact path="/science" element={<NewsBundle apiKey={this.apiKey} setProgress = {this.setProgress}  key="science" country="in" category="science" />}> </Route>
          <Route exact path="/sports" element={<NewsBundle apiKey={this.apiKey} setProgress = {this.setProgress}  key="sports" country="in" category="sports" />}> </Route>
          <Route exact path="/technology" element={<NewsBundle apiKey={this.apiKey} setProgress = {this.setProgress}  key="technology" country="in" category="technology" />}> </Route>
        </Routes>

      </BrowserRouter>
    )
  }
}
