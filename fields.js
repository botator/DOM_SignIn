//TODO make a local login system and if the user dosent an acount make one 
function renderInputh(config) {
    let div = document.createElement('div');
    let btn = document.createElement('button');
    let input = document.createElement('input');
    let p = document.createElement('p')
    btn.id = "showicon";

    p.innerText = "🐵";
    config.fields.forEach(element => {
        if (element.type == "password") {
            input.type = element.type;
            input.id = element.id;
            input.placeholder = element.placeholder
            if (config.labelOnTop) {
                div.style.display = 'flex';
                div.style.flexDirection = 'column';
                div.style.position= 'relative';
            }

            div.appendChild(input);

            input.addEventListener('input', () => {
                console.log("fut1")
                config.state[input.id] = input.value
                console.log("fut2" + config.stateView)
                if (config.stateView) {
                    console.log("fut 3")
                    config.stateView.text = JSON.stringify('a' + config.state)
                }
            })

        }
    });
    btn.onclick = function() {
      if(input.type=="password"){
        input.type = "text";
        p.innerText = "🙈";}
        else {
            input.type = "password";
            p.innerText = "🐵";
        }
      }  
     
      btn.appendChild(p)
    div.appendChild(btn)
    return div;
}
function renderInput(config) {
    let div = document.createElement('div');


    config.fields.forEach(element => {
        if (element.type == "text") {
            let input = document.createElement('input');
            input.type = element.type;
            input.id = element.id;
            input.placeholder = element.placeholder
            if (config.labelOnTop) {
                div.style.display = 'flex';
                div.style.flexDirection = 'column';
            }

            div.appendChild(input);

            input.addEventListener('input', () => {
                console.log("fut1")
                config.state[input.id] = input.value
                console.log("fut2" + config.stateView)
                if (config.stateView) {
                    console.log("fut 3")
                    config.stateView.text = JSON.stringify('a' + config.state)
                }
            })

        }
    });


    return div;
}
function renderH2(config) {
    let h2 = document.createElement('h2')
    config.fields.forEach(element => {
        if (element.type == "h2") {
            h2.id = element.id
            h2.innerText = element.text
        }
    })
    return h2;
}
function renderButton(config) {
    let div = document.createElement('div')
    div.id = "btndiv";
    let btn = document.createElement('button')
    config.fields.forEach(element => {
        if (element.type == "btn") {
            btn.id = element.id;
        }
    })
    btn.appendChild(renderH2(config))
    div.appendChild(btn)
    return div;
}
function renderH1(config) {
    let h1 = document.createElement('h1')
    config.fields.forEach(element => {
        if (element.type == "h1") {
            h1.id = element.id
            h1.innerText = element.text
            h1.style.textAlign = "center"

        }
    })
    return h1;
}
function renderDiv(config) {
    let div = document.createElement('div');
    config.fields.forEach(element => {
        if (element.type == "") {
            div.id = element.id;
        }
    })
    div.appendChild(renderH1(config))
    div.appendChild(renderInput(config))
    div.appendChild(renderInputh(config))
    div.appendChild(renderButton(config))
    return div;
}

export function renderFormLogin(config) {
    return renderDiv(config);
}