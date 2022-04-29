/** @format */
import CookieConsent from "react-cookie-consent";

const NewsLetter = () => {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Accept!"
        cookieName="userExperience"
        style={{ background: "black" }}
        buttonStyle={{
          color: "white",
          fontSize: "14px",
          fontWeight: "bold",
          background: "#3b6d3a",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience
      </CookieConsent>
    </div>
  );
};
export default NewsLetter;
