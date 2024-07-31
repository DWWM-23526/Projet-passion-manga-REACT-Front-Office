async function delay(ms, promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
  return promise;
}

export default delay;