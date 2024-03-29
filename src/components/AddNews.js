import { Button } from "react-bootstrap";
import { Form, FormGroup } from "react-bootstrap";
import { NewsContext } from "../context/NewsContext";
import { useContext, useState } from "react";

const AddNews = () => {
  const { dispatch } = useContext(NewsContext);
  const [newNews, setNewNews] = useState({
    topic: "",
    content: "",
    lastdate: "",
    haberLink: "",
    status: false
  });

  const { topic, content, lastdate, haberLink, status ,newsId} = newNews;

  const onInputChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setNewNews({ ...newNews, [e.target.name]: value });
  };
  console.log(status)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      state: {
        topic: newNews.topic,
        content: newNews.content,
        date: new Date(),
        status: newNews.status,
        haberLink:newNews.haberLink
     
      }
    });
  };



  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Form.Control
        className="mb-2" 
          type="text"
          placeholder="topic *"
          name="topic"
          value={topic}
          onChange={(e) => onInputChange(e)}
          required
        ></Form.Control>
        <Form.Control
        className="mb-2"
        as="textarea" 
          type="text"
          placeholder="content *"
          name="content"
          value={content}
          onChange={(e) => onInputChange(e)}
          required
        ></Form.Control>
         <Form.Control
        className="mb-2" 
          type="text"
          placeholder="haberLink *"
          name="haberLink"
          value={haberLink}
          onChange={(e) => onInputChange(e)}
          required
        ></Form.Control>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="status" checked={status} onChange={(e) => onInputChange(e)} label="Check me out" />
        </Form.Group>
      </FormGroup>
      <Button variant="success" type="submit" block>
        Add New News
      </Button>
    </Form>
  );
};

export default AddNews;
