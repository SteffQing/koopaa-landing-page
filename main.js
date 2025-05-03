const hamburger = document.getElementById("hamburger");
const joinWaitlist = document.getElementById("join-waitlist");
const waitlist = document.getElementById("waitlist");
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");

const hideModal = () => modal.classList.add("hidden");

hamburger.addEventListener("click", () => hamburger.classList.toggle("active"));
closeModal.addEventListener("click", hideModal);

function showModal(message) {
  modalMessage.textContent = message;
  modal.classList.remove("hidden");

  setTimeout(() => hideModal(), 5000);
}

joinWaitlist.addEventListener("click", async () => {
  const email = waitlist.value.trim();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    showModal("😒 Please enter a valid email address.");
    return;
  }

  joinWaitlist.disabled = true;
  const originalText = joinWaitlist.textContent;
  joinWaitlist.textContent = "Submitting...";

  try {
    // const response = await fetch("https://your-api-endpoint.com/waitlist", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email }),
    // });

    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }

    showModal("You've been added to the waitlist 🥳");
    waitlist.value = "";
  } catch (error) {
    console.error(error);
    showModal(error instanceof Error ? error.message : "Something went wrong 😕. Please try again.");
  } finally {
    joinWaitlist.disabled = false;
    joinWaitlist.textContent = originalText;
  }
});
