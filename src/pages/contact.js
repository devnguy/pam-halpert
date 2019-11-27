import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Header from '../components/header'
import PageTitle from '../components/pageTitle'
import ContentContainer from '../styles/contentContainer'

const ContactForm = styled.form`
  background-color: #fff;
  padding: 48px;
  box-shadow: 1px 1px 40px 0 rgba(0,0,0,.15);
  border-radius: 3px;
`

const Divider = styled.hr`
  border: none;
  height: 3px;
  width: 40%;
  text-align: left;
  background: #302419;
  margin: 1em 0;
  margin-bottom: 2em;
`

const FormFields = styled.div`
`

const FormFieldRow = styled.div`
  display: flex;
  justify-content: space-between;
`


const FormField = styled.div`
  max-width: 1000px;
  width: 48%;

  input {
    font-size: 1em;
    background-color: #F9F5F1;
    border: none;
    padding: .8em;
    width: 100%;
    max-width: 500px;
    margin-right: 1em;
    margin: 0 1em 1em 0;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
`

const MessageField = styled.div`
  max-width: 1000px;
  width: 100%;
  textarea {
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    background-color: #F9F5F1;
    border: none;
    padding: .8em;
  
    width: 100%;
    max-width: 904px;
    box-sizing: border-box;
    height: 15vh;
    &:focus {
      outline: none;
    }
  }
`

const SubmitButtons = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`

class ContactPage extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  }
  handleInputChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  sendPostData = async () => {
    const url = 'http://httpbin.org/post'
    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      company: this.state.company,
      message: this.state.message,
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const postData = await response.json()
      console.log(`POST SUCCESS: ${JSON.stringify(postData)}`)
      alert(`Success sending data via POST to ${url}. Data has been logged in the console.`)
      
    } catch (error) {
      alert(error)
      console.log(`Error sending POST data to ${url}: ${error}`)
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.sendPostData()
  }

  render() {
    return (
      <Layout>
        <Header />
        <ContentContainer>

          <PageTitle
            title="Let's work together!"
            description="We'll create something for "
            emphasis="your company, gallery, or grandma"
          />

          <ContactForm onSubmit={this.handleSubmit}>
            <h3 className="hero-heading">I'd love to hear from you!</h3>
            <h5 className="">Just fill out the form below, and I'll be in touch to set up a call.</h5>
            <p>Note: This site is loaded over HTTPS and sends a POST request to http://httpbin.org/post per assignment requirements (an insecure resource). If the browser blocks the request and you get an error, check the console for details. In order for POST request to work, you may have to load unsafe scripts.</p>
            <Divider />

            <FormFields>

              <FormFieldRow>

                <FormField>
                  <label>Name</label><br />
                  <input 
                    type="text" 
                    placeholder="Michael Scott" 
                    name="name" 
                    id="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </FormField>

                <FormField>
                  <label>Email</label><br />
                  <input 
                    type="email" 
                    placeholder="email@dundermifflin.com" 
                    name="email" 
                    id="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </FormField>

              </FormFieldRow>
              <FormFieldRow>

                <FormField>
                  <label>Phone</label><br />
                  <input 
                    type="text" 
                    placeholder="123-456-7890" 
                    name="phone" 
                    id="phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                  />
                </FormField>
                <FormField>
                  <label>Company</label><br />
                  <input 
                    type="text" 
                    placeholder="Dunder Mifflin" 
                    name="company" 
                    id="company"
                    value={this.state.company}
                    onChange={this.handleInputChange}
                  />
                </FormField>

              </FormFieldRow>

              <MessageField>
                <label>Message</label><br />
                <textarea 
                  type="text" 
                  placeholder="Yeah, I have a lot of questions. Number one: how dare you?" 
                  name="message" 
                  id="message"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                />
              </MessageField>
            </FormFields>

            <SubmitButtons>
              <button type="submit" className="slide">Send {String.fromCharCode('8594')}</button>
            </SubmitButtons>
          </ContactForm>

        </ContentContainer>
      </Layout>
    )
  }
}

export default ContactPage