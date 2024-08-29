export const handlePasswordBlur = (e, passwordFeedbackRef) => {
  const password = e.target.value;
  const passwordRegEx =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (passwordRegEx.test(password)) {
    passwordFeedbackRef.current.classList.remove("text-danger");
    passwordFeedbackRef.current.classList.add("text-success");
    passwordFeedbackRef.current.innerHTML = "&#10003; Le mot de passe est fort";
  } else {
    passwordFeedbackRef.current.classList.add("text-danger");
    passwordFeedbackRef.current.classList.remove("text-success");
    passwordFeedbackRef.current.innerText =
      "Le mot de passe doit comporter au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.";
  }
};
