const responseText = "Link copied successfully to your Clipboard.";

const buttonTag = document.querySelector("#button");
const toastAlertContainerTag = document.querySelector(".toastAlertContainer");

const openToastAlert = () => {
  toastAlertContainerTag.innerHTML = "";
  const toastAlertTag = document.createElement("div");
  toastAlertTag.classList.add("toastAlert");
  toastAlertTag.append(responseText);
  toastAlertContainerTag.append(toastAlertTag);
  toastAlertTag.style.bottom = `-${toastAlertTag.offsetHeight}px`;
  setTimeout(() => {
    toastAlertTag.style.bottom = 0;
  }, 200);

  setTimeout(() => {
    toastAlertTag.style.bottom = `-${toastAlertTag.offsetHeight}px`;
  }, 2000);
};

const copyMyGithubUrl = () => {
  openToastAlert();

  const copyText = document.querySelector(".url");
  copyText.select();

  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
};

buttonTag.addEventListener("click", () => {
  copyMyGithubUrl();
});
