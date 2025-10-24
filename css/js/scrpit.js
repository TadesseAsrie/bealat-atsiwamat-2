//Assignments empty Array
let zemenAssignments = [];

// --- DOM Element References ---
const zemenIdInput = document.getElementById("zemen-id-input");
const lookupBtn = document.getElementById("lookup-btn");
const ResultCard = document.getElementById("result-card");
const resultBlock = document.getElementById("result-block");
const resultNumberSpan = document.getElementById("result-number");
const logoutBtn = document.getElementById("logout");
const result1 = document.getElementById("result-1");
const result2 = document.getElementById("result-2");
const result3 = document.getElementById("result-3");
const result4 = document.getElementById("result-4");
const result5 = document.getElementById("result-5");
const result6 = document.getElementById("result-6");
const result7 = document.getElementById("result-7");
const result8 = document.getElementById("result-8");
const result9 = document.getElementById("result-9");
const result10 = document.getElementById("result-10");
const result11 = document.getElementById("result-11");
const result12 = document.getElementById("result-12");
const result13 = document.getElementById("result-13");
const result14 = document.getElementById("result-14");
const result15 = document.getElementById("result-15");
const result16 = document.getElementById("result-16");
const result17 = document.getElementById("result-17");
const result18 = document.getElementById("result-18");
const result19 = document.getElementById("result-19");
const result20 = document.getElementById("result-20");
const result21 = document.getElementById("result-21");
const result22 = document.getElementById("result-22");

const messageBox = document.getElementById("message-box");

// --- Helper Functions ---

function initializeDormData() {
  zemenAssignments = [
    {
      zemenIdInput: "2018",
      zemen: "2018",
      ametalem: "7518",
      meten: "1879",
      wengel: "ማርቆስ",
      kemer: "1342",
      medeb: "13",
      wenber: "12",
      metki: "18",
      bealemetik: "መስከረም 18",
      abeketie: "12",
      tinteon: "2",
      meskerem: "ሀሙስ",
      mebaga: "25",
      nenewie: "ጥር 25",
      abiy: "የካቲት 9",
      debrezeyit: "መጋቢት 6",
      hosana: "መጋቢት 27",
      siklet: "ሚያዚያ 2",
      tinsie: "ሚያዚያ 4",
      kahinat: "ሚያዚያ 27",
      eriget: "ግንቦት 13",
      perakilitos: "ግንቦት 23",
      hawariya: "ግንቦት 24",
      dihinet: "ግንቦት 26",
    },
    {
      zemenIdInput: "2017",
      zemen: "2017",
      ametalem: "7517",
      meten: "1879",
      wengel: "ማቲወስ",
      kemer: "1342",
      medeb: "12",
      wenber: "11",
      metki: "29",
      bealemetik: "መስከረም 29",
      abeketie: "1",
      tinteon: "1",
      meskerem: "ረቡዕ",
      mebaga: "3",
      nenewie: "የካቲት 3",
      abiy: "የካቲት 17",
      debrezeyit: "መጋቢት 17",
      hosana: "ሚዚያ 5",
      siklet: "ሚያዚያ 10",
      tinsie: "ሚያዚያ 12",
      kahinat: "ግንቦት 6",
      eriget: "ግንቦት 21",
      perakilitos: "ሰን 1",
      hawariya: "ሰን 2",
      dihinet: "ሰን 4",
    },
    {
      zemenIdInput: "2019",
      zemen: "2019",
      ametalem: "7519",
      meten: "1879",
      wengel: "ሉቃስ",
      kemer: "1342",
      medeb: "14",
      wenber: "13",
      metki: "7",
      bealemetik: " መስከረም 7",
      abeketie: "23",
      tinteon: "3",
      meskerem: "አርብ",
      mebaga: "13",
      nenewie: "የካቲት 13",
      abiy: "የካቲት 29",
      debrezeyit: "መጋቢት 27",
      hosana: "ሚያዚያ 17",
      siklet: "ሚያዚያ 22",
      tinsie: "ሚያዚያ 24",
      kahinat: "ግንቦት 18",
      eriget: "ሰን 3",
      perakilitos: "ሰን 13",
      hawariya: "ሰን 14",
      dihinet: "ሰን 16",
    },
  ];
  console.log(" yeEthiopia Bealat .");
}

function showMessage(message, type) {
  messageBox.textContent = message;
  // Reset classes to ensure only the new type is applied
  messageBox.className = "message-box"; // Resets all classes
  messageBox.classList.add(type);
  messageBox.classList.remove("hidden"); // Make sure it's visible

  // Hide the message after 3 seconds
  setTimeout(() => {
    messageBox.classList.add("hidden");
  }, 3000);
}

/**
 * Clears the displayed  information and hides the result card.
 */
function clearResultDisplay() {
  resultBlock.textContent = "";
  resultNumberSpan.textContent = "";
  ResultCard.classList.add("hidden"); // Hide the entire result card
}

function lookup() {
  const zemenId = zemenIdInput.value.trim().toUpperCase(); // Convert to uppercase for case-insensitive matching

  clearResultDisplay(); // Clear any previous results

  if (!studentId) {
    showMessage("ዓመቱን ያስገቡ.", "info");
    return;
  }

  // Find all matching items
  const foundzemen = zemenAssignments.find(
    (zemen) => zemen.zemenIdInput === zemenId
  );

  if (foundzemen) {
    // Display the found information
    resultSpan.textContent = foundzemen.zemenIdInput;
    zemenIdInput.textContent = foundzemen.Number;
    result1.textContent = foundzemen.meten;
    result2.textContent = foundzemen.wengel;
    result3.textContent = foundzemen.kemer;
    result4.textContent = foundzemen.medeb;
    result5.textContent = foundzemen.wenber;
    result6.textContent = foundzemen.metki;
    result7.textContent = foundzemen.bealemetik;
    result8.textContent = foundzemen.abeketie;
    result9.textContent = foundzemen.tinteon;
    result10.textContent = foundzemen.meskerem;
    result11.textContent = foundzemen.mebaga;
    result12.textContent = foundzemen.nenewie;
    result13.textContent = foundzemen.abiy;
    result14.textContent = foundzemen.debrezeyit;
    result15.textContent = foundzemen.hosana;
    result16.textContent = foundzemen.siklet;
    result17.textContent = foundzemen.tinsie;
    result18.textContent = foundzemen.kahinat;
    result19.textContent = foundzemen.eriget;
    result20.textContent = foundzemen.perakilitos;
    result21.textContent = foundzemen.hawariya;
    result22.textContent = foundzemen.dihinet;
    ResultCard.classList.remove("hidden"); // Show the result card
  } else {
    // zemen ID not found
    showMessage(`የለለ አስገቡ .እባክዎ የቅርብ ዘመን ያስገቡ .`, "error");
  }

  studentIdInput.value = ""; // Clear the input field after lookup
}

// --- Event Listeners ---
lookupBtn.addEventListener("click", lookup);
logoutBtn.addEventListener("click", logout);
function logout() {
  ResultCard.classList.add("hidden");
}
// Optional: Allow pressing Enter key in the input field to trigger lookup
zemenIdInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    lookup();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  initializeDormData();
});
