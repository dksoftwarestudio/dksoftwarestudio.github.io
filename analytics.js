// analytics.js — DK Software Studio

function loadAnalytics() {
  var script = document.createElement('script');
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-T3DB7K2NSS";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-T3DB7K2NSS');
}

function acceptCookies() {
  localStorage.setItem("analytics_consent", "accepted");
  loadAnalytics();
  document.getElementById("cookie-banner").style.display = "none";
}

function declineCookies() {
  localStorage.setItem("analytics_consent", "declined");
  document.getElementById("cookie-banner").style.display = "none";
}

window.addEventListener("load", function() {
  var consent = localStorage.getItem("analytics_consent");

  if (consent === "accepted") {
    loadAnalytics();
  } else if (!consent) {
    var banner = document.getElementById("cookie-banner");
    if (banner) banner.style.display = "block";
  }
});
