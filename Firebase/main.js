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
  
  /* UI Elements */
  const name = document.getElementById("name-input");
  const message = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");
  const chatroom = document.getElementById("chatroom");
  const toggleShuffleButton = document.getElementById("toggle-shuffle");
  
  let isShuffling = false;
  let shuffleInterval;
  
  /* Send message to Firebase */
  sendButton.onclick = function (event) {
	event.preventDefault();
	const text = { name: name.value, message: message.value };
	message.value = ""; // Clear input field
	ref.push(text); // Push data to Firebase
  };
  
  /* Listen for changes in Firebase */
  ref.on("value", (snapshot) => {
	const data = snapshot.val();
	chatroom.innerHTML = ""; // Clear chatroom
	for (const key in data) {
	  const chatBox = `
		<li>
		  <strong>${data[key].name}</strong>
		  <div>${data[key].message}</div>
		</li>`;
	  chatroom.innerHTML += chatBox;
	}
  });
  
  /* Shuffle the chat messages */
  function shuffleChatroom() {
	const messages = Array.from(chatroom.children);
	for (let i = messages.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  [messages[i], messages[j]] = [messages[j], messages[i]];
	}
	chatroom.innerHTML = "";
	messages.forEach((message) => chatroom.appendChild(message));
  }
  
  /* Start the shuffle automatically */
  function startShuffle() {
	shuffleInterval = setInterval(shuffleChatroom, 3000); // Start the shuffle every 3 seconds
	isShuffling = true;
	toggleShuffleButton.innerText = "Stop Shuffle"; // Change button text
  }
  
  /* Toggle shuffling */
  toggleShuffleButton.addEventListener("click", function () {
	if (isShuffling) {
	  clearInterval(shuffleInterval); // Stop the shuffle
	  isShuffling = false;
	  toggleShuffleButton.innerText = "Start Shuffle"; // Change button text
	} else {
	  startShuffle(); // Start the shuffle
	}
  });
  
  /* Handle mouse movement for flashlight effect */
  document.addEventListener("mousemove", function (e) {
	const light = document.getElementById("light");
	light.style.left = `${e.pageX - 100}px`; // Center circle horizontally
	light.style.top = `${e.pageY - 100}px`;  // Center circle vertically
  });
  
  // Start the shuffle automatically when the page loads
  startShuffle();
  