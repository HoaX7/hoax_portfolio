import React, { Fragment, useEffect, useState } from "react";
import { getProfile, getDetails } from "../api/api/profile";
import ModalWrapper from "../components/Commons/Modals/ModalWrapper";
import Navbar from "../components/Commons/Navbar/Index";
import Spinner from "../components/Commons/Spinner/Spinner";
import Form from "../components/Form/Index";
import ContactModal from "../components/Modals/ContactModal";
import LoginModal from "../components/Modals/LoginModal";
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";
import Experience from "../components/Sections/Experience";
import Home from "../components/Sections/Index";
import Projects from "../components/Sections/Projects";
import Auth from "../helpers/auth";
import Skills from "../components/Sections/Skills";

const navMenu = [
  {
    key: "about",
    name: "About",
    href: "#about",
  },
  {
    key: "skills",
    name: "Skills",
    href: "#skills",
  },
  {
    key: "project",
    name: "Projects",
    href: "#project",
  },
  {
    key: "experience",
    name: "Experience",
    href: "#experience",
  },
  {
    key: "contact",
    name: "Contact",
    modal: true,
    href: "#",
  },
  {
    key: "login",
    name: "Login",
    modal: true,
    href: "#",
  },
];
export default function App() {
  const [profile, setProfile] = useState(null);
  const [details, setDetails] = useState(null);
  const [editProfile, setEditProfile] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(navMenu[0]);
  const [loading, setLoading] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  useEffect(() => {
    var isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (window.location.hash && isChrome) {
      setTimeout(function () {
        var hash = window.location.hash;
        window.location.hash = "";
        window.location.hash = hash;
      }, 300);
    }
    (async () => {
      try {
        const res = await getProfile();
        if (res.error) throw res;
        const result = await getDetails();
        if (result.error) throw result;
        setDetails(result.data);
        setProfile(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    })();
  }, []);
  return (
    <Fragment>
      <Navbar
        navMenu={navMenu}
        className="d-flex justify-content-center"
        selectedMenu={selectedMenu}
        setSelectedMenu={(item) => setSelectedMenu(item)}
        showContactModal={() => setShowContactModal(true)}
        showLoginModal={() => setShowLoginModal(true)}
      />
      {loading === true && (
        <div className="mt-5">
          <Spinner />
        </div>
      )}
      {loading === false && (
        <div className="d-flex justify-content-center">
          {profile && (
            <div className="profile mx-3 d-flex">
              {editProfile === false && (
                <Home
                  profile={profile}
                  setEdit={(bool) => setEditProfile(bool)}
                />
              )}
              {editProfile === true && (
                <Form
                  profileDetails={profile}
                  onSave={(obj) => {
                    setProfile(obj);
                    setEditProfile(false);
                  }}
                  details={details.details || {}}
                  onClose={() => setEditProfile(false)}
                />
              )}
              <div>
                <img
                  className={
                    "mt-5 profile_img shadow " +
                    (Auth.isLoggedIn() ? "ptr profile_img_editable" : "")
                  }
                  width="120px"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      )}
      {editProfile === false && loading === false && (
        <section id="about">
          <div className="d-flex justify-content-center">
            <div className="profile">
              <About profile={profile} />
            </div>
          </div>
        </section>
      )}
      {editProfile === false && loading === false && (
        <section id="skills" className="skills">
          <div className="d-flex justify-content-center">
            <div className="profile mb-5">
              <Skills details={details} />
            </div>
          </div>
        </section>
      )}
      {editProfile === false && loading === false && (
        <section id="project">
          <div className="d-flex justify-content-center">
            <div className="profile">
              <Projects details={details} />
            </div>
          </div>
        </section>
      )}
      {editProfile === false && loading === false && (
        <section id="experience">
          <div className="d-flex justify-content-center">
            <div className="profile">
              <Experience details={details} />
            </div>
          </div>
        </section>
      )}
      {editProfile === false && loading === false && (
        <section className="contact_wrapper">
          <div className="d-flex justify-content-center">
            <div className="profile">
              <Contact />
            </div>
          </div>
        </section>
      )}
      {showContactModal && (
        <ModalWrapper
          renderModal={() => (
            <ContactModal onClose={() => setShowContactModal(false)} />
          )}
        />
      )}
      {showLoginModal && (
        <ModalWrapper
          renderModal={() => (
            <LoginModal onClose={() => setShowLoginModal(false)} />
          )}
        />
      )}
    </Fragment>
  );
}
