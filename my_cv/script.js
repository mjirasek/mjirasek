

// const leftBox = document.createElement('div');
// leftBox.style.flex = '1';
// leftBox.style.height = '100px';
// leftBox.style.margin = '10px';
// leftBox.style.backgroundColor = 'gray';

// const rightBox = document.createElement('div');
// rightBox.style.flex = '1';
// rightBox.style.height = '100px';
// rightBox.style.margin = '10px';
// rightBox.style.backgroundColor = 'gray';

// boxContainer.style.display = 'flex';
// boxContainer.style.flexDirection = 'row';
// boxContainer.appendChild(leftBox);
// boxContainer.appendChild(rightBox);


const elements = document.getElementsByClassName('my_contribution');

for (let i = 0; i < elements.length; i++) {
    const newSpan = document.createElement('span');
    newSpan.style.fontWeight = 'bold';
    newSpan.style.fontStyle = 'italic';
    newSpan.textContent = 'My contribution: ';
    elements[i].insertBefore(newSpan, elements[i].firstChild);
}

const newDiv = document.createElement('div');
newDiv.classList.add('my-class');

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new parddsagraph';

// newDiv.appendChild(newParagraph);

document.body.onload = addElement;

function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}


const contentElements = document.getElementsByClassName('paper_authors');
const searchTerm = 'M. Jirasek';

for (let i = 0; i < contentElements.length; i++) {
    contentElements[i].innerHTML =
        contentElements[i].innerHTML.replace(new RegExp(searchTerm, 'g'),
            `<b>${searchTerm}</b>`);
}

// var text = fs.readFileSync('test.json','utf8')
// console.log (text)