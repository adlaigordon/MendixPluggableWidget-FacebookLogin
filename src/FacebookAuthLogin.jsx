import { Component, createElement } from "react";

import FacebookLogin from 'react-facebook-login';
import "./ui/FacebookAuthLogin.css";

export default class FacebookAuthLogin extends Component {
    constructor(props) {
        super(props);

        this.responseFacebook = this.responseFacebook.bind(this);
    }

    render() {
        return (
            <FacebookLogin
                appId={this.props.facebookauthAppId}
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook}
                // cssClass="my-facebook-button-class"
                // icon="fa-facebook"
            />
        )
    }

    responseFacebook(response) {
        this.props.facebookauthResponse.setTextValue(JSON.stringify(response));
        this.props.facebookauthCallback.execute();
    }
}



// AppID ; 3113912158719541