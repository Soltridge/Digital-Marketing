import React, { useEffect, useState } from "react";
import backgroundImage from "../../../assets/images/Background.jpg";
import { Navbar, Nav, Container } from "react-bootstrap";
const CustomNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  // const [leftPosition, setLeftPosition] = useState("20%");

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const screenWidth = window.innerWidth;
  //     if (screenWidth > 768) {
  //       setLeftPosition("25%");
  //     } else {
  //       setLeftPosition("50%");
  //     }
  //   };

  //   // Attach the event listener on component mount
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup the event listener on component unmount
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <>
      <Navbar expand="md" bg={isSticky ? "light" : "white"} sticky="top">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
          }}
        >
          <img
            src={backgroundImage}
            alt="backgroundImage"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(59, 30, 35, .7)",
            }}
          />
          <div>
            <div
              style={{
                position: "absolute",
                top: "25%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "1",
                color: "#ffffff",
                fontSize: "24px",
                textAlign: "center",
                fontFamily: "Body Text Large",
              }}
            >
           
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "1",
                color: "#ffffff",
                fontSize: "60px",
                fontWeight: "100",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <p className="d-flex flex-column">
                <span >The Future of Digital</span>
                <span>
                  Marketing{" "}
                  <span
                    style={{
                      fontStyle: "bold",
                      fontWeight: "800",
                    }}
                  >
                    is Here
                  </span>
                </span>
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "75%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "1",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  border: "1px solid white",
                  backgroundColor: "transparent",
                  color: "white",
                  padding: "16px ",
                  width: "auto",
                  transition:
                    "background-color 0.3s ease-in-out, font-size 0.3s ease-in-out, color 0.3s ease-in-out",
                  fontSize: "18px",
                  textAlign: "center",
                  fontFamily: "Garet",
                }}
                href="#Contact"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "#000";
                  e.target.style.fontSize = "16px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "white";
                  e.target.style.fontSize = "18px";
                }}
              >
               <span style={{whiteSpace:"nowrap"}}> REQUEST A CONSULTATION</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;
