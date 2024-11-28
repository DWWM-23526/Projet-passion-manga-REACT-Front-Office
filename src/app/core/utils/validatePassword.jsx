export const validatePasswords = (password, password2, passwordInputRef, passwordFeedbackRef) => {
  if (password !== password2) {
    passwordInputRef.current.classList.add("border-danger", "text-danger");
    passwordFeedbackRef.current.classList.add("text-danger");
    passwordFeedbackRef.current.classList.remove("text-success");
    passwordFeedbackRef.current.innerText = "Les mots de passe ne correspondent pas.";
    return false;
  }
  return true;
};
