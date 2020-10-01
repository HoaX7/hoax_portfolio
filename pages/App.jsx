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

const navMenu = [
  {
    key: "about",
    name: "About",
    href: "#about",
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
      {loading === false && <div className="d-flex justify-content-center">
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
                className={"mt-5 profile_img shadow " + (Auth.isLoggedIn() ? "ptr profile_img_editable" : "")}
                width="120px"
                src="https://images-na.ssl-images-amazon.com/images/I/41eehlrUIHL._SX384_BO1,204,203,200_.jpg"
                alt=""
              />
            </div>
          </div>
        )}
      </div>}
      {editProfile === false && loading === false &&  (
        <section id="about">
          <div className="d-flex justify-content-center">
            <div className="profile">
              <About profile={profile} />
            </div>
          </div>
        </section>
      )}
      {editProfile === false && loading === false &&  (
        <section id="">
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
        <ModalWrapper renderModal={() => (
          <ContactModal onClose={() => setShowContactModal(false)} />
        )} />
      )}
      {showLoginModal && (
        <ModalWrapper renderModal={() => (
          <LoginModal onClose={() => setShowLoginModal(false)} />
        )} />
      )}
    </Fragment>
  );
}
