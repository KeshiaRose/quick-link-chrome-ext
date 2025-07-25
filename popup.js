const links = [
  { name: "Free Trial", url: "https://dashboard.fingerprint.com/signup" },
  { name: "Contact Sales", url: "https://fingerprint.com/contact-sales/" },
  {
    name: "Identification",
    url: "https://fingerprint.com/products/identification/",
  },
  {
    name: "Smart Signals",
    url: "https://fingerprint.com/products/smart-signals/",
  },
  {
    name: "Device Intelligence",
    url: "https://fingerprint.com/products/fingerprint-pro/",
  },
  {
    name: "SDKs",
    url: "https://fingerprint.com/sdk-libraries/",
  },
];

const list = document.getElementById("link-list");

links.forEach((link) => {
  const p = document.createElement("p");
  p.textContent = link.name;

  p.onclick = async () => {
    try {
      await navigator.clipboard.writeText(link.url);
      const originalText = p.textContent;
      p.textContent = "Copied!";
      setTimeout(() => (p.textContent = originalText), 1000);
    } catch (err) {
      p.textContent = "Error";
      setTimeout(() => (p.textContent = link.name), 1000);
    }
  };

  list.appendChild(p);
});
