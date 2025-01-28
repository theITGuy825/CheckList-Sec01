const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task
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

 //Retrieving the Todo-List
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

   //Adding Security and Validation
   function sanitizeInput(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
   }

   // Use this function when saving tasks 
   const taskText = sanitizeInput(taskInput.value.trim());

// Remove Task on Click
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

//adding Firebase to my main javascript file 
import { initializeApp } from 'firebase/app';
import { doc, getDocs, addDoc, updateDoc, getFirestore, collection } from
"firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDhpku4RzYDq6Sf6_HsEhn8bgePZeetv9A",
    authDomain: "webdevtrends-31a7c.firebaseapp.com",
    projectId: "webdevtrends-31a7c",
    storageBucket: "webdevtrends-31a7c.firebasestorage.app",
    messagingSenderId: "791440809739",
    appId: "1:791440809739:web:721bd554b36c47eee58c0e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add Logging to my code 
import log from "loglevel";
// Set the log level (trace, debug, info, warn, error)
log.setLevel("info");
// Example logs
log.info("Application started");
log.debug("Debugging information");
log.error("An error occurred");

function addTask(task) {
    try {
    // Log user action
    log.info(`Task added: ${task}`);
    // Add task to the list
    tasks.push(task);
    renderTasks();
    } catch (error) {
    // Log error
    log.error("Error adding task", error);
    }
   }