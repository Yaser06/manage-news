import { Button } from "react-bootstrap";
import { Form, FormGroup } from "react-bootstrap";
import { NewsContext } from "../context/NewsContext";
import { useContext, useState } from "react";

const EditNews = ({ theNews ,editOrDetail}) => {
  const { dispatch } = useContext(NewsContext);
  console.log("sws", theNews)
  const [topic, setTopic] = useState(theNews?.topic || "x");
  const [content, setContent] = useState(theNews?.content || "x");
  const [date, setDate] = useState(theNews?.date || "x");
  const [haberLink, setHaberLink] = useState(theNews?.haberLink);
  const [status, setStatus] = useState(theNews?.status)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...theNews,
      topic,
      content,
      status,
      date: new Date(),
      haberLink

    }
    dispatch({
      type: 'update',
      id: theNews.id,
      state: newItem
    });
  }
  console.log("ss",status)

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Form.Control className="mb-2"
          readOnly={editOrDetail ? true : false}
          type="text"
          placeholder="topic *"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        ></Form.Control>
        <Form.Control className="mb-2"
          readOnly={editOrDetail ? true : false}
          type="content"
          placeholder="content *"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></Form.Control>
       <Form.Control
        className="mb-2" 
        readOnly={editOrDetail ? true : false}
          type="text"
          placeholder="haberLink *"
          name="haberLink"
          value={haberLink}
          onChange={(e) => setHaberLink(e.target.value)}
          required
        ></Form.Control>
        <Form.Group hidden={editOrDetail ? true : false} className="mb-2" controlId="formBasicCheckbox">
          <Form.Check type="checkbox"
            name="status" 
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
            label="Check me out" />
        </Form.Group>
      </FormGroup>
      {!editOrDetail?<Button variant="success" type="submit" block>
        Update News
      </Button>:null}
    </Form>
  );
};

export default EditNews;
