## Account

Contains User Model, Route and Controller

### Model

Model contains the data structure for a User of the application.

Here the User Model basically refers the Table `User` In the database

Model Data Structure
    
    username: string,
    email: string,
    password: string,
    full_name: string,
    created_at: time_stamp,
    updated_at: time_stamp

### Controller

Controller connects the model with the view,

as our application follows the REST API Architecture, our VIEW in MVC (Model View Controller) is the JSOn file sent to the end user or the client side

Account Controller Contains

#####UserCreate
    User registration controller, 
    Route: api/users/create/
    Post Body: 
    {
        username: string,
        password: string,
        full_name: string,
        email: string
    } 
    
    Response: {
        username: string,
        token: string, 
    }
    

#####UserLogin

    User Login Contoller
    Route: api/users/login/
    Post Body: 
    {
        username: string,
        password: string
    }    
    
    Response: {
        username: username,
        token: token
    }