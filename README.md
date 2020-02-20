# Stuttr

"Clone" of the site Flickr, used to store photos that users can upload and sort into groups/albums and more.

[Live Demo](https://stuttr.herokuapp.com/#/)

Current functions:

* Allow users to signup/login as well as use demo login
* Allow users to upload photos with titles/descriptions
* Show all photos uploaded by all users
* Show individual photos when selected by a logged in user
* Built with React and Redux for front end and Ruby on Rails/PostgreSQL for backend

## Technologies
* Javascript ES6
* Heroku
* HTML5 CSS
* React
* AWS S3
* Redux
* Ruby on Rails
* Active Storage
* PostgreSQL

## Key Features
* User Auth

* Splash Page, protected routes

![alt text](https://i.imgur.com/AqI55i2.jpg "splash page")

* Photo Upload/Show/Index

Uses a modal to prompt user to browse their local files and allows them to upload. Utilizes a file reader to store the photo and its values in a slice of state.

```javascript
handleSubmit(e) {
        e.preventDefault();
        const newPhoto = new FormData();
        newPhoto.append('photo[title]', this.state.title)
        newPhoto.append('photo[description]', this.state.description)
        newPhoto.append('photo[user_id]', this.props.photo.user_id)
        newPhoto.append('photo[image]', this.state.imageFile)
        this.props.processForm(newPhoto)
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
        this.forceUpdate();

    }
```

![alt text](https://i.imgur.com/zfKyJGm.png "upload form/modal")

Once a user has selected a photo and filled out the fields for title/description, those values are appended to a FormData object and passed to a function that creates an entry in the database with those same values.

## Modals
Utilizes modals for the upload function instead of redirecting to different frontend routes.

## Planned Features
* Comments
* Photo Search
* Photo Tags
* Groups
* Albums
