const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', async () => {
    const task = taskInput.value.trim();
    if (task) {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText) {
    await addTaskToFirestore(taskText);
    renderTasks();
    taskInput.value = "";
    }
    renderTasks();
    }
    });
    async function addTaskToFirestore(taskText) {
    await addDoc(collection(db, "todos"), {
    text: taskText,
    completed: false
    });
    }

    async function renderTasks() {
        var tasks = await getTasksFromFirestore();
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
        if(!task.data().completed){
        const taskItem = document.createElement("li");
        taskItem.id = task.id;
        taskItem.textContent = task.data().text;
        taskList.appendChild(taskItem);
        }
        });
        }
        async function getTasksFromFirestore() {
        var data = await getDocs(collection(db, "todos"));
        let userData = [];
        data.forEach((doc) => {
        userData.push(doc);
        });
        return userData;
        }


// Remove Task on Click
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

const sw = new URL('service-worker.js', import.meta.url)
if ('serviceWorker' in navigator) {
    const s = navigator.serviceWorker;
    s.register(sw.href, {
        scope: '/Lab1-2/'
    })
        .then(_ => console.log('Service Worker Registered for scope:', sw.href,
'with', import.meta.url))
        .catch(err => console.error('Service Worker Error:', err));
}

const taskText = sanitizeInput(taskInput.value.trim());

import { initializeApp } from "firebase/app";
import { doc, getDocs, addDoc, updateDoc, getFirestore, collection } from
"firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhpku4RzYDq6Sf6_HsEhn8bgePZeetv9A",
  authDomain: "webdevtrends-31a7c.firebaseapp.com",
  projectId: "webdevtrends-31a7c",
  storageBucket: "webdevtrends-31a7c.firebasestorage.app",
  messagingSenderId: "791440809739",
  appId: "1:791440809739:web:721bd554b36c47eee58c0e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function sanitizeInput(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
    }

    