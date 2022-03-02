const menuItems = [
  {
    id: "google",
    title: "Google",
  },
  {
    id: "bing",
    title: "Bing",
  },
  {
    id: "search.yahoo",
    title: "Yahoo",
  },
  {
    id: "ask",
    title: "Ask",
  },
  {
    id: "duckduckgo",
    title: "DuckDuckGo",
  },
];

const xref = (x) => {
  const y = { ask: "web?q=", duckduckgo: "?ia=web&q=" };
  return y[x] || "search?q=";
};

const onClick = ({ pageUrl, menuItemId }) => {
  const url = `https://www.${menuItemId}.com/${xref(
    menuItemId
  )}site${encodeURIComponent(":" + pageUrl)}`;
  chrome.tabs.create({ url });
};

chrome.contextMenus.onClicked.addListener(onClick);
menuItems.forEach((x) => chrome.contextMenus.create({ ...x, contexts: ["all"] }));
