import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Profile } from "../Profile";
import { useNavigate } from "react-router-dom";

export const CommunityMarket = ({ isAuth }) => {
  const [buyerPostLists, setBuyerPostList] = useState([]);
  const postsCollectionRef = collection(db, "buyerPosts");
  const navigate = useNavigate();

  useEffect(() => {
    const getBuyerPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setBuyerPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBuyerPosts();
  }, []);

  const deleteBuyerPost = async (id) => {
    const postDoc = doc(db, "buyerPosts", id);

    await deleteDoc(postDoc);
  };

  return (
    <div className="app">
      <h2 style={{ margin: "2%", textAlign: "center", color: "white" }}>
        Buyer
      </h2>

      {buyerPostLists.map((buyerPost) => (
        <Card key={buyerPost.id} style={{ margin: "2%" }}>
          <Card.Header>{buyerPost.productName}</Card.Header>

          <div className="deletePost">
            {isAuth && buyerPost.seller.id === auth.currentUser.uid && (
              <Button
                variant="danger"
                onClick={() => deleteBuyerPost(buyerPost.id)}
              >
                &#128465;
              </Button>
            )}
          </div>

          <Card.Body>
            <Row>
              <Col md={6}>
                <Card.Title>{buyerPost.name}</Card.Title>
                <Card.Text>{buyerPost.contact}</Card.Text>
                <Card.Text>{buyerPost.email}</Card.Text>
                <Card.Text>{buyerPost.location}</Card.Text>
                <Card.Text>{buyerPost.energyType}</Card.Text>
              </Col>
              <Col md={6}>
                <Card.Text>{buyerPost.sizeofLocation}</Card.Text>
                <Card.Text>{buyerPost.electrictyGenerated}</Card.Text>
                <Card.Text>{buyerPost.price}</Card.Text>
                <Card.Text>{buyerPost.description}</Card.Text>
                <Card.Text>{buyerPost.landOwnershipDocuments}</Card.Text>
                <Card.Text>{buyerPost.idProof}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <button
            onClick={() => {
              navigate("/Profile");
            }}
          >
            Buy
          </button>
        </Card>
      ))}
    </div>
  );
};
