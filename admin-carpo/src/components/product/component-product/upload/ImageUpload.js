import React from "react";
import storage from "../../Firebase/index";
import "./upload.css";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0
    };
  }

  handleChangeFile = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUploadImage = e => {
    e.preventDefault();
    const { image } = this.state;
    if(image === null) {
      alert("Ban chua chon anh")
    } else {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          // progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progress });
        },
        error => {
          // Error function ...
          console.log(error);
        },
        () => {
          // complete function ...
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              this.setState({ url });
              this.props.handleUploadImage(url);
            });
        }
      );
    }
  };
  render() {
    return (
      <div className="center">
        <label htmlFor="name" className="control-label required-lable">
          Upload ảnh
        </label>
        <progress
          value={this.state.progress}
          max="100"
          className="progress w-100"
        />
        <div className="file-upload">
          <div className="file-select">
            <div className="file-select-button" id="fileName">
              Choose File
            </div>
            <div className="file-select-name" id="noFile">
              No file chosen...
            </div>
            <input
              type="file"
              name="chooseFile"
              id="chooseFile"
              onChange={this.handleChangeFile}
            />
          </div>
        </div>
        <img
          src={this.state.url || this.props.image ? this.props.image : ""}
          alt="Uploaded Images"
          height="140"
          width="200"
        />
        <button onClick={this.handleUploadImage} className="btn-upload">
          Upload
        </button>
      </div>
    );
  }
}

export default ImageUpload;
