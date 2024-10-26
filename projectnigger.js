document.addEventListener("DOMContentLoaded", function() {
  const thoughts = [
      "You Can Control The Boat Through The Controls Page!",
      "Even Illness Becomes Wellness if We Replace I With We!",
      "Make Sure To Visit Our School Website! ( Vidyanjali High School )",
      "G.A.N.G.A Stands For Global Autonomous Nautical Garbage Assistant!",
      "We Can Use GANGA to Clean Ponds And Lakes!",
      "Fun Fact: We Made 3 Versions Of This Boat!",
      "We Made This Boat In Just 2 Months!",
      "This Project was Done By VHS Kuddos!"
  ];

  const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
  document.getElementById("thought").textContent = randomThought;
});

function chat() {
  const name = document.getElementById("name-input").value;
  alert(`Hello, ${name}! Let's chat.`);
}