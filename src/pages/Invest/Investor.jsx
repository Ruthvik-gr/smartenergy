import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { Card, Row, Col } from "react-bootstrap";
const backgroundImageUrl = "../../assets/bg.jpg";
// import { imgg } from "../../assets";
import { useNavigate } from "react-router-dom";
import { Profile } from "../Profile";

export const Investor = ({ isAuth }) => {
  const navigate = useNavigate();
  const [investeePostLists, setInvesteePostList] = useState([]);
  const postsCollectionRef = collection(db, "investeePosts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setInvesteePostList(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "investeePosts", id);

    await deleteDoc(postDoc);
  };

  return (
    <div className="app">
      <h2 style={{ margin: "2%", textAlign: "center", color: "white" }}>
        Investor
      </h2>

      {investeePostLists.map((investeePostList) => (
        <Card key={investeePostList.id} style={{ margin: "2%" }}>
          <Card.Header>{investeePostList.name}</Card.Header>

          <div className="deletePost">
            {isAuth && investeePostList.author.id === auth.currentUser.uid && (
              <button
                onClick={() => {
                  deletePost(investeePostList.id);
                }}
                className="btn btn-danger"
              >
                &#128465;
              </button>
            )}
          </div>

          <Card.Body>
            <Row>
              <Col md={6}>
                <Card.Title>{investeePostList.contact}</Card.Title>
                <Card.Title>{investeePostList.email}</Card.Title>
                <Card.Text>{investeePostList.location}</Card.Text>
                {/* Add more content for the first column */}
              </Col>
              <Col md={6}>
                <Card.Text>{investeePostList.energyType}</Card.Text>
                <Card.Text>{investeePostList.sizeofLocation}</Card.Text>
                <Card.Text>{investeePostList.budget}</Card.Text>
                <Card.Text>{investeePostList.funding}</Card.Text>
                <Card.Text>{investeePostList.returnPercentage}</Card.Text>
                <Card.Text>{investeePostList.description}</Card.Text>
                <Card.Text>{investeePostList.landOwnershipDocuments}</Card.Text>
                <Card.Text>{investeePostList.idProof}</Card.Text>
                {/* Add more content for the second column */}
              </Col>
            </Row>
          </Card.Body>
          <button
            onClick={() => {
              navigate("/Profile");
            }}
          >
            invest
          </button>
        </Card>
      ))}
    </div>
  );
};
