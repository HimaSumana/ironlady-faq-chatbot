const faqs = {
  "programs": "Iron Lady offers various leadership programs such as Confidence Building, Career Acceleration, Executive Presence, and Women Leadership Mastery.",
  "duration": "The duration depends on the program. Most programs run from a few weeks up to a few months, designed for gradual learning and practice.",
  "mode": "Iron Lady programs are mainly conducted online for accessibility, with select workshops offered offline.",
  "certificate": "Yes, participants receive a certificate of completion after successfully finishing the program.",
  "mentors": "The programs are led by experienced leaders, corporate professionals, and certified coaches who specialize in women’s empowerment and leadership."
};

async function sendMessage() {
  const inputField = document.getElementById("user-input");
  const message = inputField.value.trim();
  if (!message) return;

  addMessage("user", message);
  inputField.value = "";

  // Check FAQs first
  const faqResponse = await getFAQResponse(message.toLowerCase());
  if (faqResponse) {
    addMessage("bot", faqResponse);
  } else {
    addMessage("bot", "Sorry, I don’t have an answer for that yet.");
  }
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function getFAQResponse(userMsg) {
  if (userMsg.includes("program")) return faqs.programs;
  if (userMsg.includes("duration")) return faqs.duration;
  if (userMsg.includes("online") || userMsg.includes("offline")) return faqs.mode;
  if (userMsg.includes("certificate")) return faqs.certificate;
  if (userMsg.includes("mentor") || userMsg.includes("coach")) return faqs.mentors;
  return null;
}
