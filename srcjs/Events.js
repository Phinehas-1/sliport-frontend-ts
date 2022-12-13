import { Repository } from "./Repository";
import { LocalStorageStore } from "./Storage";

const elements = [];
const setUpEventListener = (element, event, callback) => {
    element.addEventListener(event, callback);
    elements.push(element);
};

setUpEventListener(document.forms[1], 'submit', (e) => {
    e.preventDefault();
    let store = new LocalStorageStore();
    let repo = new Repository(store);
    if (!repo.addPublisher(document.forms[1])) {
        console.log('Could not save the publisher.');
        return;
    }
    console.log(`Publisher : ${document.forms[1]['publisher-name'].value} was added.`);
});

setUpEventListener(document.forms[0], 'submit', (e) => {
    e.preventDefault();
    let store = new LocalStorageStore();
    let repo = new Repository(store);
    if (!repo.addReport(document.forms[0])) {
        console.log('Could not save the report.');
        return;
    }
    console.log(`Report for : ${document.forms[0]['publisher-name'].value} was added.`);
});
