const resultContainer = document.getElementById('result-section')

const drawElements = (incomingData) => {
    const {title, text} = incomingData
    const titleBox = document.createElement('h2', 'title-output')
    titleBox.textContent = title
    resultContainer.appendChild(titleBox)
    const textBox = document.createElement('h3', 'title-output')
    textBox.textContent = text
    resultContainer.appendChild(textBox)
}

const loadPage = () => {
    const url = 'http://localhost:3000'
    fetch(url)
        .then(res => res.json())
        .then(data => drawElements(data))
}

const getDataFromInput = () => {
    const textInput = document.getElementById('input-field')
    const titleInput = document.getElementById('title-field')
    const title = titleInput.value
    const text = textInput.value
    console.log('This is TITLE coming from the form: ', title)
    console.log('This is TEXT coming from the form: ', text)
    return {title, text} //this returns {title: "THE VALUE HERE", text: "THE VALUE"}
}

const sendInputToBackend = (inputTitle, inputText) => {

    const payload = {inputTitle, inputText}

    console.log('payload to send in the body: ', payload)

    const url = 'http://localhost:3000'
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(payload) // body data type must match "Content-Type" header
  })
        .then(response => response.json()) // parses JSON response into native JavaScript objects
        .then(data => console.log('data after fetch(post): ', data))

}
const submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const {title, text} = getDataFromInput()
    sendInputToBackend(title, text)
    // console.log('What format is this? ', title, text)
})

window.addEventListener('load', () => {
    loadPage();
})
