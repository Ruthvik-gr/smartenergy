import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import "../../styles/investee.scss";

export const Investee = ({ isAuth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [energyType, setEnergyType] = useState("");
  const [sizeofLocation, setSizeofLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [funding, setFunding] = useState("");
  const [returnPercentage, setReturnPercentage] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [landOwnershipDocuments, setLandOwnershipDocuments] = useState("");
  const [idProof, setIdProof] = useState("");
  const [capacity, setCapacity] = useState("");
  const [investmentRequired, setInvestmentRequired] = useState("");

  const postsCollectionRef = collection(db, "investeePosts");
  let navigate = useNavigate();

  const createInvesteePosts = async () => {
    await addDoc(postsCollectionRef, {
      name,
      email,
      contact,
      energyType,
      sizeofLocation,
      budget,
      funding,
      returnPercentage,
      description,
      location,
      landOwnershipDocuments,
      idProof,
      capacity,
      investmentRequired,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/investor");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="Container">
      <Container className="mt-5 ">
        <h2
          className="mb-4"
          style={{ color: "white", textAlign: "center", marginTop: "0%" }}
        >
          Investee
        </h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label style={{ color: "white" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formContact">
                <Form.Label style={{ color: "white" }}>Contact</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your contact number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmailAddress">
                <Form.Label style={{ color: "white" }}>
                  Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formLocation">
                <Form.Label style={{ color: "white" }}>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>

              {/* <Form.Group controlId="formEnergyType">
                <Form.Label style={{ color: "white" }}>
                  Type of Energy
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter type of energy"
                  value={energyType}
                  onChange={(e) => setEnergyType(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formSizeofLocation">
                <Form.Label style={{ color: "white" }}>
                  Size of Location
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the size of location"
                  value={sizeofLocation}
                  onChange={(e) => setSizeofLocation(e.target.value)}
                />
              </Form.Group> */}

              <Form.Group controlId="formFunding">
                <Form.Label style={{ color: "white" }}>
                  Required Investment
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Required Investment"
                  value={funding}
                  onChange={(e) => setFunding(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formReturnPercentage">
                <Form.Label style={{ color: "white" }}>
                  Return Profit Percentage
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the return profit percentage"
                  value={returnPercentage}
                  onChange={(e) => setReturnPercentage(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formIdProof">
                <Form.Label style={{ color: "white" }}>Aadhar No</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Aadhar No"
                  value={idProof}
                  onChange={(e) => setIdProof(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                onClick={createInvesteePosts}
                style={{ marginTop: "4%" }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
