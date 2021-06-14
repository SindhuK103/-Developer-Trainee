import React from "react";
import axios from "axios";

class Put extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      orders: [],
      id:0,
      Comments:"",
  };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);  
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }


    handleSubmit = (e) => {
      alert("submitted")
      debugger;
      console(e.target)
      e.preventDefault();
    }

    // function handle(e) {
    //   const newdata = { ...order};
    //   newdata[e.target.id] = e.target.value;
    //   newdata[e.target.Comments] = e.target.value;

    //   setdata(newdata);
    //   console.log(newdata);
    // }
  
  // update(e) {
  //   // update entity - PUT
  //   const change= async () => {
  //     debugger;

  //         id:this.Order.id,
  //         Comments: this.Order.Comments
  //     };


  //   e.preventDefault();
  //   // this will update entries with PUT

       componentDidMount() {
             axios.put('http://localhost:44334/Default1/UpdateOrder', {
            "method": "PUT",
             "headers": {
             "content-type": "application/json",
              "accept": "application/json"
                 },
             "body": JSON.stringify({
                id: this.state.id,
                Comments: this.state.Comments
               })
         })
                .then(response => response.json())
                .then(response => { console.log(response);
                })
                .catch(err => { console.log(err); });
 }

        render() {
          return (
              <div className="row">
                <div className="col-md-3 offset-md-4 mt-5 justify-content-center">
                    <form className="form-control">
                        <input
                          id="id"
                          name="id"
                          type="number"
                          className="form-control"
                          placeholder="id"
                          value={this.state.id}
                          onChange={(e)=>this.handleChange(e)}
                          required
                          />
                        <input
                          id="Comments"
                          name="Comments"
                          type="test"
                          className="form-control"
                          placeholder="Comments"
                          value={this.state.Comments}
                          onChange={(e)=>this.handleChange(e)}
                          required
                          />

                        <button className="btn btn-info" type='submit' onSubmit={(e)=>this.handleSubmit(e)} >
                    Update
                </button>
                      </form>
                  </div>
              </div>  
        
    );
  }
}

export default Put;
