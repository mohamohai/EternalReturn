import { Component } from "react";
import hero from "./404NotFoundImg.jpg";
import "./NotFound.css";

class NotFound extends Component {
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="notFoundDiv">
        <button onClick={this.goBack}>
          <img className="notFound" src={hero} />
        </button>
      </div>
    );
  }
}
export default NotFound;
