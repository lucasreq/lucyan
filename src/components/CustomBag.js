import {Form} from "react-bootstrap";
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Materials from "./Materials";

export default class CustomBag extends Component {
  state = {
    feedback: '',
    formSubmitted: false
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'lucasreqpro@gmail.com';

  handleCancel() {
    this.setState({
      feedback: ''
    });
  }

  handleChange(event) {
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user,
    } = this.props.env;

    this.sendFeedback(
      template,
      this.sender,
      receiverEmail,
      this.state.feedback,
      user
    );

    this.setState({
      formSubmitted: true
    });
  }

 // Note: this is using default_service, which will map to whatever
 // default email provider you've set in your EmailJS account.
  sendFeedback(templateId, senderEmail, receiverEmail, feedback, user) {
    window.emailjs
      .send('default_service', templateId, {
          senderEmail,
          receiverEmail,
          feedback
        },
        user
      )
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    return (
        <Form className="feedback-form" onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Type de sacs: </Form.Label>
          <Form.Control as="select">
            <option>Sac de plage</option>
            <option>Sac de ville</option>
            <option>Pochette</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Matière de pendentif:</Form.Label>
          <Materials />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description du sac voulu :</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group>
            <input type="submit" value="Submit" className="btn btn--submit" />
        </Form.Group>
      </Form>
    );
  }
}

CustomBag.propTypes = {
  env: PropTypes.object.isRequired
};