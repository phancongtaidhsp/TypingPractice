import React, { Component } from "react";
import "./adminpage.style.css";
import ForBiddenPage from "./forbiddenpage.component"
import { BoxLoading } from 'react-loadingg'
import axios from "axios";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = { lesson: { name: '', content: '', level: '' }, listLesson: [], isAdmin: false, isLoading: true , showingAlert: false};
    this.handleChangeLessonName = this.handleChangeLessonName.bind(this);
    this.handleChangeLessonLevel = this.handleChangeLessonLevel.bind(this);
    this.handleChangeLessonContent = this.handleChangeLessonContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeLessonName(event) {
    this.setState({ lesson: { name: event.target.value, content: this.state.lesson.content, level: this.state.lesson.level } });
  }

  handleChangeLessonLevel(event) {
    this.setState({ lesson: { name: this.state.lesson.name, content: this.state.lesson.content, level: event.target.value } });
  }

  handleChangeLessonContent(event) {
    this.setState({ lesson: { name: this.state.lesson.name, content: event.target.value, level: this.state.lesson.level } });
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post(`/lessons/newLesson`, this.state.lesson)
      .then((res) => {
        this.setState({listLesson: [...this.state.listLesson,res.data]})
      })
      .catch((error) => console.log(error));
    this.setState({lesson: { name: '', content: '', level: '' }})
  }

  onDeleteLesson(id){
    axios.delete(`/lessons/${id}`)
      .then((res) => {
        var les = this.state.listLesson.find(lesson => {
          return lesson._id === id
        })
        var indexLes = this.state.listLesson.indexOf(les);
        this.setState({listLesson: [...this.state.listLesson.slice(0,indexLes),...this.state.listLesson.slice(indexLes+1)]})
        this.setState({
          showingAlert: true
        });
        setTimeout(() => {
          this.setState({
            showingAlert: false
          });
        }, 2000);
      })
      .catch((error) => console.log(error));
  }

  onUpdateLesson(event,id){
    var childNodes = event.target.parentElement.parentElement.parentElement.childNodes
    var lesson = {name : childNodes[1].innerText, content: childNodes[2].innerText, level: childNodes[3].innerText}
    axios.put(`/lessons/updateLesson/${id}`,lesson)
      .then((res) => {
        var les = this.state.listLesson.find(item => {
          return item._id === id
        })
        var indexLes = this.state.listLesson.indexOf(les);
        this.setState({listLesson: [...this.state.listLesson.slice(0,indexLes),res.data,...this.state.listLesson.slice(indexLes+1)]})
        this.setState({
          showingAlert: true
        });
        setTimeout(() => {
          this.setState({
            showingAlert: false
          });
        }, 2000);
      })
      .catch((error) => console.log(error));
  }

  ondblclick(event){
    event.target.contentEditable=true;
    event.target.focus();
  }

  componentDidMount() {
    axios.get(`/admin`)
    .then((res) => {
      this.setState({isAdmin: true})
      axios.get(`/lessons`)
      .then((res) => {
        this.setState({ listLesson: res.data, isLoading: false });
      })
      .catch((error) => console.log(error));

    }).catch(err => {
      this.setState({isAdmin: false})
      this.setState({isLoading: false})
      console.log(err)
    })
  }

  render() {
    const { listLesson, isAdmin, isLoading, showingAlert  } = this.state;
    if(isAdmin && !isLoading)
    return (
      <div>
        <div className="container">
        <div className={`alert alert-success showingAlert ${showingAlert ? "alert-active" : "alert-close"}`} style={{ width: 600, margin: "10px auto 0" }} role="alert">
        Lessons has been updated
      </div>
          <div className="row">
            <form onSubmit={this.handleSubmit} id="formHeader" className="d-flex">
              <div className="leftForm d-flex flex-column justify-content-between">
                <input value={this.state.lesson.name} onChange={this.handleChangeLessonName} type="text" placeholder="Name" className="inputLeft" />
                <input value={this.state.lesson.level} onChange={this.handleChangeLessonLevel} type="text" placeholder="Level" className="inputLeft" />
              </div>
              <div className="centerForm d-flex flex-column justify-content-center">
                <button type="submit">Add</button>
              </div>
              <div className="rightForm d-flex flex-column justify-content-center">
                <input value={this.state.lesson.content} onChange={this.handleChangeLessonContent} type="text" placeholder="Content" className="inputLeft" />
              </div>
            </form>
          </div>
          <div className="row tableAdmin">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Name</th>
                  <th scope="col">Content</th>
                  <th scope="col">Level</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {listLesson.map((lesson,index) =>
                  <tr key={lesson._id}>
                    <th scope="row">{index+1}</th>
                    <td onDoubleClick={this.ondblclick}>{lesson.name}</td>
                    <td onDoubleClick={this.ondblclick}>{lesson.content}</td>
                    <td onDoubleClick={this.ondblclick}>{lesson.level}</td>
                    <td>
                      <div className="rowAction">
                        <button onClick={() => this.onDeleteLesson(lesson._id)} className="deleteAction d-flex align-items-center justify-content-between">
                          Delete<i className="fas fa-trash-alt" />
                        </button>
                        <button onClick={(event) => this.onUpdateLesson(event,lesson._id)} className="updateAction d-flex align-items-center justify-content-between">
                          Update<i className="fas fa-edit" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
    else if(!isAdmin && !isLoading)
    return (
      <ForBiddenPage />
    )
    else
    return (
      <BoxLoading />
    )
  }
}

export default AdminPage;