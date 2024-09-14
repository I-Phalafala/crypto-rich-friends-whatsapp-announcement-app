require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const { generateResponse } = require('./geminiService');

const app = express();
const port = process.env.PORT || 3000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/webhook', async (req, res) => {
  const incomingMessage = req.body.Body;
  const from = req.body.From;

  console.log(`Received message from ${from}: ${incomingMessage}`);

  try {
    const responseMessage = await generateResponse(incomingMessage);

    await client.messages.create({
      body: responseMessage,
      from: 'whatsapp:+27600129933',
      to: from
    });

    console.log(`Sent message: ${responseMessage}`);
  } catch (error) {
    console.error('Error:', error);
  }

  res.send('<Response></Response>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});