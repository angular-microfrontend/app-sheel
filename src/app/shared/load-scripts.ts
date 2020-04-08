const isJsLoaded = (url) => {
  let isLoaded = false;
  const loadedJS = document.querySelectorAll("script");
  for (let i = 0; i < loadedJS.length; i++) {
    if (loadedJS[i]["src"].includes(url)) {
      isLoaded = true;
    }
  }
  return isLoaded;
};

const loadScript = (arrOfUrls: string[]) => {
  for (let i = 0; i < arrOfUrls.length; i++) {
    if (!isJsLoaded(arrOfUrls[i])) {
      const node = document.createElement("script");
      node.src = arrOfUrls[i];
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
  }
};

export const passDataToComponent = (context, elementTag, data, cb) => {
  setTimeout(
    (context) => {
      document
        .querySelector(elementTag)
        .setAttribute("data", JSON.stringify(data));

      document
        .querySelector(elementTag)
        .addEventListener("dataUpdated", (e) => {
          cb(context, e);
        });
    },
    0,
    context
  );
};

export const propsChanged = (elementTag, data) => {
  setTimeout(() => {
    document
      .querySelector(elementTag)
      .setAttribute("data", JSON.stringify(data));
  }, 0);
};

export default loadScript;
