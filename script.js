// Handle form submission
document.getElementById("helpForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const question = document.getElementById("question").value.trim();
    const formMsg = document.getElementById("formMsg");

    // Basic validation
    if (name === "" || email === "" || question === "") {
        formMsg.textContent = "Please fill out all fields.";
        formMsg.style.color = "red";
    } else if (!email.includes("@") || !email.includes(".")) {
        formMsg.textContent = "Please enter a valid email.";
        formMsg.style.color = "red";
    } else {
        formMsg.textContent = "Request submitted successfully!";
        formMsg.style.color = "green";

        // Clear fields
        document.getElementById("helpForm").reset();
    }
});

// Add resource to the list
function addResource() {
    const input = document.getElementById("resourceInput");
    const resourceName = input.value.trim();
    const list = document.getElementById("resourceList");

    if (resourceName === "") {
        alert("Please enter a resource name.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${resourceName}
        <button onclick="this.parentElement.remove()">Remove</button>
    `;
    list.appendChild(li);
    input.value = "";
}