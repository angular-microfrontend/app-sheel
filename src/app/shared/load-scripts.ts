const loadScript = (arrOfUrls: string[]) => {
  for (let i = 0; i < arrOfUrls.length; i++) {
    const node = document.createElement("script");
    node.src = arrOfUrls[i];
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
};

export default loadScript;
