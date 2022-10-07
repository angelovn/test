function browserHistory(browser, commands) {
  let internet = Object.assign({}, browser);
  for (let com of commands) {
    let [command, site] = com.split(" ");
    if (command === "Close") {
      for (let el of internet["Open Tabs"]) {
        if (el === site) {
          let closed = site;
          internet["Recently Closed"].push(closed);
          let index = internet["Open Tabs"].indexOf(el);
          internet["Open Tabs"].splice(index, 1);
          internet["Browser Logs"].push(com);
          break;
        }
      }
    } else if (command === "Open") {
      internet["Open Tabs"].push(site);
      internet["Browser Logs"].push(com);
    } else {
      internet["Recently Closed"] = [];
      internet["Open Tabs"] = [];
      internet["Browser Logs"] = [];
    }
  }
  console.log(internet["Browser Name"]);
  console.log(`Open Tabs: ${internet["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${internet["Recently Closed"].join(", ")}`);
  console.log(`Browser Logs: ${internet["Browser Logs"].join(", ")}`);
}
browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
