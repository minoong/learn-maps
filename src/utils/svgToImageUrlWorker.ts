onmessage = async (event: MessageEvent) => {
  const { data } = event;
  const blob = new Blob([data], { type: "image/svg+xml" });

  const reader = new FileReader();
  reader.onload = () => {
    postMessage({ imageData: reader.result });
  };
  reader.onerror = (e) => {
    console.log(e);
    postMessage({ error: true });
  };
  reader.readAsDataURL(blob);
};
