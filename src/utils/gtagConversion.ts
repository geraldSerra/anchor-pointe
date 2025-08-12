declare global {
  interface Window {
    gtag_conversion: (url: string, id: string) => void;
  }
}

type identifierType = "form_submission" | "phone_call";

const gtagConversion = (identifier: identifierType, url: string) => {
  let id = "";

  if (identifier === "form_submission") {
    id = "l6t9CIbwmYUbEIeX3-1A";
  } else if (identifier === "phone_call") {
    id = "lgYwCN2Hj4UbEIeX3-1A";
  }

  if (typeof window.gtag_conversion === "function") {
    window.gtag_conversion(url, id);
  }
};

export default gtagConversion;
