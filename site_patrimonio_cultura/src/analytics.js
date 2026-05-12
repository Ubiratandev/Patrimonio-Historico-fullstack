import ReactGA from "react-ga4";

export const initAnalytics = () => {
  ReactGA.initialize("G-7MTJWRJ40W");
};

export const trackPage = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};