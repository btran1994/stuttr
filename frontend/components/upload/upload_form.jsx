import React from 'react';

class UploadForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.photo
        // console.log(this.props, 'props')
    }

    handleClick() {
        console.log('click')
        $('#file-upload').trigger('click')
    }

    handleSubmit(e) {
        e.preventDefault();
        const newPhoto = new FormData();
        newPhoto.append('photo[title]', this.state.title)
        newPhoto.append('photo[description]', this.state.description)
        newPhoto.append('photo[user_id]', this.props.photo.user_id)
        newPhoto.append('photo[image]', this.state.imageFile)
        this.props.processForm(newPhoto).then(photo => {
            console.log(photo, 'photo')
        })
        this.props.closeModal();
    }

    handleUpload(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({imageUrl: reader.result, imageFile: file})
        }

        if (file) {
            reader.readAsDataURL(file)
        } else {
            console.log(this.state, 'invalid?')
        }

        if (file) {
            console.log('hello')
        }
        this.forceUpdate();

    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        // console.log(this.state, 'imageurl')
        return (
            <div className="uploady">
                <h1 className="upload-text">Upload Photo:</h1>
                <form onSubmit={this.handleSubmit.bind(this)} className="upload-form">
                    <br/>
                    <h1>
                        Title:
                    </h1>
                    <input onChange={this.update('title')} type="text" className="title-input"/>
                    <br/>
                    <h1>
                        Description:
                    </h1>
                    <textarea onChange={this.update('description')} className="description-input" id="" cols="30" rows="10"></textarea>
                    <br/>
                    <input type="submit" className="submit-photo" value="Upload Photo"/>
                    <br/>
                    <br/>
                </form>
                <div>
                    <img className="upload" onClick={this.handleClick} src={window.blackUpload} alt="" />
                    <input id="file-upload" type="file" onChange={this.handleUpload.bind(this)} />  
                </div>
                <div className="image-preview">
                    <h1>Image Preview:</h1>
                    <img className="img-preview" src={this.state.imageUrl} alt=""/>
                </div>
            </div>
            
        )
    }
}

export default UploadForm;