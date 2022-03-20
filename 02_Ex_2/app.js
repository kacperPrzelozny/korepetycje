const task1EL = document.getElementsByClassName("sample_class");

function getTag(elements) {
    let tags = [];
    for (let i = 0; i < elements.length; i++) {
        let tag = elements[i].tagName;
        tags.push(tag);
    }
    return tags;
}

console.log(getTag(task1EL));

const task2EL = document.getElementById("sample_id");

function getClass(element) {
    let classes = element.classList.value.split(" ");
    return classes;
}

console.log(getClass(task2EL));

const task3EL = document.getElementsByClassName("sample_class_2")[0].getElementsByTagName("li")

function getInnerText(elements) {
    let texts = [];
    for (let i = 0; i < elements.length; i++) {
        let text = elements[i].innerText;
        texts.push(text);
    }
    return texts;
}

console.log(getInnerText(task3EL));

const task4EL = document.getElementsByTagName("a")

function getAddress(elements) {
    let addresses = [];
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("href") != null) {
            let address = elements[i].getAttribute("href")
            addresses.push(address)
        }
    }
    return addresses;
}

console.log(getAddress(task4EL));

const task5EL = document.getElementsByClassName("sample_class_3")[0].children

console.log(getTag(task5EL));