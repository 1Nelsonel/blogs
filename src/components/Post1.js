import { Card, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

const Post1 = () => {
  // Step 2: Create a state variable to store the data fetched from the API
  const [data, setData] = useState([]);

  // Step 3: Use the useEffect hook to fetch the data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/blogs/");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      {/* Step 4: Display the image */}
      <Card.Img
        variant="top"
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg"
        width={20}
        height={250}
      />
      <Card.Body>
        {/* Step 5: Display the name */}
        <Card.Title>{data.name}</Card.Title>
        {/* Step 6: Display the description */}
        <Card.Text>
          {data.description}
        </Card.Text>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
        <Nav.Link href="/" style={{ color: "white" }} />
      </Card.Body>
    </Card>
  );
};

export default Post1;
