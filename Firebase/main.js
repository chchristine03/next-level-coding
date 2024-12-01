const firebaseConfig = {
	apiKey: "AIzaSyD57_cKRjB6fjIl96iCDEmm4LQSsllGNGE",
	authDomain: "exhibiting-perspectives-a61b3.firebaseapp.com",
	projectId: "exhibiting-perspectives-a61b3",
	storageBucket: "exhibiting-perspectives-a61b3.firebasestorage.app",
	messagingSenderId: "349673039738",
	appId: "1:349673039738:web:d39f0571a3d85528f118c3",
	measurementId: "G-8FEYGHZNMD"
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
