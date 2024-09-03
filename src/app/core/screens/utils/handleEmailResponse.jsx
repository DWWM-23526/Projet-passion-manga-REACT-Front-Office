export const handleEmailResponse = (response, emailInputRef, emailFeedbackRef, email) => {
  if (response && response.length > 0) {
    const user = response.find((user) => user.email === email);
    if (user) {
      emailInputRef.current.classList.add("border-danger", "text-danger");
      emailInputRef.current.classList.remove("border-success", "text-success");
      emailFeedbackRef.current.classList.add("text-danger");
      emailFeedbackRef.current.classList.remove("text-success");
      emailFeedbackRef.current.innerText = "Cet email est déjà pris.";
    } else {
      emailInputRef.current.classList.remove("border-danger", "text-danger");
      emailInputRef.current.classList.add("border-success", "text-success");
      emailFeedbackRef.current.classList.remove("text-danger");
      emailFeedbackRef.current.classList.add("text-success");
      emailFeedbackRef.current.innerHTML = "&#10003; Email disponible";
    }
  }
};
