async function fetchText() {
    let response = await fetch('../../readme.txt');
    let data = await response.text();
    console.log('fetchText: ' + data)
}

fetchText();

async function fetchText2() {
    let response = await fetch('./non-existence.txt');

    console.log(response.status); // 404
    console.log(response.statusText); // Not Found

    if (response.status === 200) {
        let data = response.text();
        // handle data
        console.log('fetchText2: ' + data)
    }
}

fetchText2();
