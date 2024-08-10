import { Popup } from "../../components/Popup/Popup";
import { loginData } from "../../service/login.data";

import './login.css';

function Login(){

    const { logo, header, description, inputFields, loginButton, registerText, registerTextPrefix } = loginData;

    return (
    <div className="atl-login">
        <img src={logo} alt={""} />
        <Popup 
            alwaysShow={true} 
            header={header}
            description={description}
            inputFields={inputFields}
            confirmCTA={loginButton}
            footerText={registerText}
            footerTextPrefix={registerTextPrefix}
            isOpen={true}
            />
    </div>
    )
}

export default Login;