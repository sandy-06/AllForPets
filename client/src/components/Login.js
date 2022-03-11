import React from "react";

export default function LoginForm() {
    return (
        <div className="uk-flex uk-flex-center uk-grid">
            <div className="uk-card uk-card-default">
                <div className="uk-child-width-1-4@s uk-flex uk-flex-center" uk-grid>
                    
                    <h3 className="uk-card-title">Login</h3>
                        <form id="login">
                            <input placeholder="Username"></input>
                            <input placeholder="someone@email.com"></input>
                            <input placeholder="Password(Requirements)"></input>
                        </form>
                    
                </div>
            </div>
        </div>
    )
};
