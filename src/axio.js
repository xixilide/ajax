import React, { PropTypes } from 'react'
import axios from 'axios';
class Axios extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  handleSubmit(e){
    e.preventDefault();
    var value = this.refs.input.value;
      axios.get("http://api.github.com/users/"+value)
      .then(response =>
        this.setState({
          data:response.data,
          wait:false
        })
      )
      .catch(function (error) {
        console.log(error);
      })

  }
  // componentDidMount(){
  // var value = this.refs.input.value;
  //   axios.get("http://api.github.com/users/"+value)
  //   .then(response =>
  //     this.setState({
  //       data:response.data,
  //       wait:false
  //     })
  //   )
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //
  // }
  render () {
  return(
    <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input type="text" ref="input" />
      </form>
        {this.state.wait? '正在加载数据'　: <div>
             <img  src={this.state.data.avatar_url}/>
          <p>个人简介：{this.state.data.bio}</p>
        </div>}
    </div>
  )

}
}
export default Axios;
