
function saveDates (){
    localStorage.setItem("dataBackLocal",JSON.stringify(dataBack));
}

function printLocalStorage(){
    const saveData = JSON.parse(localStorage.getItem("dataBackLocal"));

    let nameCard = document.querySelector(".userInfo__name"); //name
    const inputName = document.querySelector("#name");
    let nameData= saveData.name;
    inputName.value=nameData;
    nameCard.innerHTML=nameData;

    let jobCard = document.querySelector(".userInfo__job");
    const inputJob = document.querySelector("#job");
    let jobData = saveData.job;
    inputJob.value = jobData;
    jobCard.innerHTML = jobData;

    let emailCard = document.querySelector(".email");
    const inputEmail = document.querySelector("#email");
    let emailData = saveData.email;
    inputEmail.value = emailData;
    emailCard.href = `mailto:${emailData}`;

    let phoneCard = document.querySelector(".mobile");
    const inputPhone = document.querySelector("#phone");
    let phoneData = saveData.phone;
    inputPhone.value = phoneData;
    phoneCard.href = phoneData;

    let linkedinCard = document.querySelector(".linkedin");
    const inputLinkedin = document.querySelector("#linkedin");
    let linkedinData = saveData.linkedin;
    inputLinkedin.value = linkedinData;
    linkedinCard.href = `https://linkedin.com/in/${linkedinData}`;

    let githubCard = document.querySelector(".github");
    const inputGithub = document.querySelector("#github");
    let githubData = saveData.github;
    inputGithub.value = githubData;
    githubCard.href = `https://github.com/${githubData}`;
    console.log(githubData);
};


window.addEventListener("load", printLocalStorage);

