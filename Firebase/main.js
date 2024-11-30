const firebaseConfig = {
	apiKey: "AIzaSyC0pW8AfBZshwB2qXDjIbQwc6jnqxuue8w",
	authDomain: "next-level-coding-59219.firebaseapp.com",
	databaseURL: "https://next-level-coding-59219-default-rtdb.firebaseio.com",
	projectId: "next-level-coding-59219",
	storageBucket: "next-level-coding-59219.firebasestorage.app",
	messagingSenderId: "534293376059",
	appId: "1:534293376059:web:9924432463cdf8b0d9c01e",
	measurementId: "G-SQJYCQDE1P"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref("chatroom");
/* ^^^ initialization */

const name = document.getElementById("name-input");
const message = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatroom = document.getElementById("chatroom");

sendButton.onclick = function (event) {
	// this is to prevent the default operation of a form (aka going to a different page, you can try taking it out
	event.preventDefault();

	// get the values from user input
	const text = { name: name.value, message: message.value };

	// clear the message
	message.value = "";

	// push the data to firebase
	ref.push(text);
};

ref.on("value", (snapshot) => {
	// get the data from firebase
	const data = snapshot.val();

	// clear out the old chatroom HTML
	chatroom.innerHTML = "";

	// use a for ... in loop to populate the chatroom
	for (const key in data) {
		chatroom.innerHTML += `
			<li>
			<strong>${data[key].name}</strong>:
			${data[key].message}
			</li>`;
	}
});
