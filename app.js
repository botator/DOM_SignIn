import { renderFormLogin } from "./fields.js";

let app = document.getElementById("app");

let login = renderFormLogin({
    stateView : true,
    labelOnTop : true,
    showState: {},
    state:{},
    fields: [
        {
            id: 'name',
            type: 'text',
            placeholder: 'Username'
        },{
            id: 'pass',
            type: 'password',
            placeholder: 'Password'
        },{
            id:'login',
            type:'',

        },{
            id:'h1',
            type:"h1",
            text: "Sign In"
        },{
            id:'h2',
            type:"h2",
            text: "Sign In"
        },{
            id:'btn',
            type:"btn"
            
        }
    ]
});

app.appendChild(login);