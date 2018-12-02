"use strict";const inputName=document.querySelector("#name"),nameCard=document.querySelector(".userInfo__name");function handlerInputName(){let e=inputName.value;""===inputName.value?nameCard.innerHTML="Nombre Apellido":nameCard.innerHTML=e}inputName.addEventListener("keyup",handlerInputName),inputName.addEventListener("blur",handlerInputName),inputName.addEventListener("change",handlerInputName),inputName.addEventListener("keydown",handlerInputName);const inputJob=document.querySelector("#job"),jobCard=document.querySelector(".userInfo__job");function handlerInputJob(){let e=inputJob.value;""===inputJob.value?jobCard.innerHTML="Front-end developer":jobCard.innerHTML=e}inputJob.addEventListener("keyup",handlerInputJob),inputJob.addEventListener("blur",handlerInputJob),inputJob.addEventListener("change",handlerInputJob),inputJob.addEventListener("keydown",handlerInputJob);const inputEmail=document.querySelector("#email"),emailCard=document.querySelector(".email");function handlerInputEmail(){let e=inputEmail.value;emailCard.href=`mailto:${e}`}inputEmail.addEventListener("keyup",handlerInputEmail),inputEmail.addEventListener("blur",handlerInputEmail),inputEmail.addEventListener("change",handlerInputEmail),inputEmail.addEventListener("keydown",handlerInputEmail);const inputGithub=document.querySelector("#github"),GithubCard=document.querySelector(".github");function handlerInputGithub(){let e=inputGithub.value;GithubCard.href=`https://github.com/${e}`}inputGithub.addEventListener("keyup",handlerInputGithub),inputGithub.addEventListener("blur",handlerInputGithub),inputGithub.addEventListener("change",handlerInputGithub),inputGithub.addEventListener("keydown",handlerInputGithub);const inputLinkedin=document.querySelector("#linkedin"),LinkedinCard=document.querySelector(".linkedin");function handlerInputGithub(){let e=inputLinkedin.value;LinkedinCard.href=`https://linkedin.com/${e}`}inputGithub.addEventListener("keyup",handlerInputLinkedin),inputGithub.addEventListener("blur",handlerLinkedin),inputGithub.addEventListener("change",handlerLinkedin),inputGithub.addEventListener("keydown",handlerLinkedin);