import React, { useContext, useState } from 'react';
import firebaseConfig from '../Firebase-config/Firebase-config';
import Header from '../Header/Header';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { userContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

    const Login = () => {
    const {loggedUser} = useContext(userContext);
    const[loggedInUser,setLoggedInUser] = loggedUser;
    const [newUser, setNewUser] = useState(false);
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const { displayName, email } = result.user;
                const newUser = { name: displayName, email };
                setLoggedInUser(newUser);
                history.replace(from);
            }).catch(function (error) {
                var errorMessage = error.message;
                const newUser = {...loggedInUser}
                newUser.error = errorMessage;
            });

    }
    const handleFbLogIn = () => {
        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            const { displayName, email } = result.user;
            const newUser = { name: displayName, email };
            setLoggedInUser(newUser);
            history.replace(from);
        }).catch(function (error) {
            var errorMessage = error.message;
            const newUser = {...loggedInUser}
             newUser.error = errorMessage;
        });
    }

    const handleBlur = (e) => {
        let isValid = true;
        if (e.target.name === 'email') {
            isValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const passwordNumber = /\d/.test(e.target.value);
            const passwordLength = e.target.value.length > 6;
            isValid = passwordNumber && passwordLength;

        }

        if (isValid) {
            const newUser = { ...loggedInUser }
            newUser[e.target.name] = e.target.value;
            setLoggedInUser(newUser)
            
        }
        else{
            const newUser = { ...loggedInUser }
            newUser.formValid = false;
            setLoggedInUser(newUser)
        }
        
    }
   
    const handleSubmit = (e) => {
        if (newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    const newUserInfo ={...loggedInUser}
                    setLoggedInUser(newUserInfo)
                    UpdateUserName(newUserInfo.name)
                    history.replace(from);

                })
                .catch(function (error) {
                    var errorMessage = error.message;
                    const newUserInfo = { ...loggedInUser }
                    newUserInfo.success = false;
                    newUserInfo.error = errorMessage;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo)
                });
        }


        if (!newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    const newUserInfo = {...loggedInUser}
                    newUserInfo.name = res.user.displayName;
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(function (error) {
                    var errorMessage = error.message;
                    const newUser = {...loggedInUser}
                    newUser.error = errorMessage;
                    newUser.success= false;
                    setLoggedInUser(newUser)
                    // ...
                });
        }
        e.preventDefault();
    }
    
    const UpdateUserName = (name) => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName:name
        }).then(function() {
          console.log("update successfully")
        }).catch(function(error) {
          console.log(error);
        });
      }

    return (
        <div className="home-container">
            <Header></Header>
            <div className="login-container container">
                <div className="from-group bg-light login-form mx-auto p-3">
                    <h2 className="mb-3" >Log in</h2>
                    <form onSubmit={handleSubmit} className="mt-2">
                        {newUser && <div className="form-group">
                            <label for="">Name</label>
                            <input name="name" onBlur={handleBlur} type="text" className="form-control" id="" required placeholder="Enter name" />
                        </div>}
                        <div className="form-group">
                            <label for="">Email address</label>
                            <input name="email" onBlur={handleBlur} type="email" className="form-control" id=""  required placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="">Password</label>
                            <input name="password" onBlur={handleBlur} type="password" className="form-control" id=""  required placeholder="Password" />
                        </div>
                        <div className="d-flex justify-content-between my-2" >
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="">Remember me</label>
                            </div>
                            <div className="form ">
                                <a href="/">Forget  password</a>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-warning  mt-3 d-block w-75 mx-auto ">Login</button>
                    </form>
                    {loggedInUser.success==false && <p className="text-danger">{loggedInUser.error}</p>}
                    {loggedInUser.formValid == false && <p className="text-danger">Email or password is not valid , please check again..</p>}
                    <div className="d-flex justify-content-center mt-3" >
                        <p>do not have account  ? </p>
                        <button style={{ marginLeft: '10px', borderRadius: '5px' }} onClick={() => setNewUser(!newUser)}>Create account</button>
                    </div>
                </div>
                <div className="or-line d-block  mx-auto  text-center" > <span>---------</span> Or <span>---------</span>  </div>
                <button onClick={handleFbLogIn} className="text-left d-flex sign-btn mx-auto ">
                    <img className="m-1" src="https://i.imgur.com/hPkbIgr.png" alt="" />
                    <h6 className="m-2 mx-5" >Continue with facebook </h6>
                </button>
                <button onClick={handleGoogleSignIn} className="text-left d-flex sign-btn mx-auto ">
                    <img className="m-1" src="https://i.imgur.com/aneJZWX.png" alt="" />
                    <h6 className="m-2 mx-5" >Continue with google </h6>
                </button>
            </div>
        </div>
    );
};

export default Login;