import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import "../../styles/investee.scss";

export const PublicMarket = ({ isAuth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [energyType, setEnergyType] = useState("");
  const [sizeofLocation, setSizeofLocation] = useState("");
  const [electrictyGenerated, setElectricityGenerated] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [landOwnershipDocuments, setLandOwnershipDocuments] = useState("");
  const [idProof, setIdProof] = useState("");

  const productsCollectionRef = collection(db, "buyerPosts");
  const navigate = useNavigate();

  const createSellerProduct = async () => {
    await addDoc(productsCollectionRef, {
      name,
      email,
      contact,
      location,
      energyType,
      sizeofLocation,
      electrictyGenerated,
      price,
      description,
      landOwnershipDocuments,
      idProof,
      seller: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/community-market");
  };

  return (
    <div className="Container">
      <Container className="mt-5">
        <h2
          className="mb-4"
          style={{ color: "white", textAlign: "center", marginTop: "0%" }}
        >
          Seller
        </h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label style={{ color: "white" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label style={{ color: "white" }}>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formContact">
                <Form.Label style={{ color: "white" }}>Contact</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formLocation">
                <Form.Label style={{ color: "white" }}>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>

              {/* <Form.Group controlId="formEnergyType">
                <Form.Label style={{ color: "white" }}>Energy Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter energy type"
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
                  placeholder="Enter size of location"
                  value={sizeofLocation}
                  onChange={(e) => setSizeofLocation(e.target.value)}
                />
              </Form.Group> */}

              <Form.Group controlId="formElectricityGenerated">
                <Form.Label style={{ color: "white" }}>
                  Electricity Generated
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter electricity generated"
                  value={electrictyGenerated}
                  onChange={(e) => setElectricityGenerated(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPrice">
                <Form.Label style={{ color: "white" }}>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formIdProof">
                <Form.Label style={{ color: "white" }}>Aadhar No</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Aadhar No"
                  value={idProof}
                  onChange={(e) => setIdProof(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                onClick={createSellerProduct}
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
