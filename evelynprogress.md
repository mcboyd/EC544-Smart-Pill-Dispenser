## Project Progress - Evelyn Liu

Weekly Progress:
* [4/6/20](#040620)
* [3/30/20](#033020)
* [3/23/20](#032320)
---
<a name="040620"/>

### Week ending 3/30/20

__Tasks completed__ this week:

- API Gateway
	- [x] Connect Lambda function to API Gateway
		- [x] Set up stateless REST API
		- [x] Set up resource using telegram token
		- [x] Set up POST method
	- [x] Successfully input test parameters
	- [x] Set up error codes transmittence from test parameters
	- [x] Deploy with a stage name and resource url
		- [x] Read about [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
	- [x] Set Telegram webhook to API url
		- [x] Learn about [webhooks](https://requestbin.com/blog/working-with-webhooks/#what-is-a-webhook)
		- [x] Set up Postman to test webhook
	- [x] Communicate with Telegram
		- [x] Identify JSON content as events from Telegram
		- [x] Store user ID & message into local variables
		- [x] Identify access tokens for Telegram API
		- [x] Send messages to Telegram with local variables
		
-Raspberry Pi
	-[x] Install Raspbian into 8G MicroSD

---
<a name="033020"/>

### Week ending 3/30/20

__Tasks completed__ this week:

- [x] Design [Medication Tables](MariaDB/MedicationTable.md)

- Set up IDEs and integrate with Github
   - [x] Set up Git Bash and set head to local folder
	- [x] Set up AWS Cloud9 Environment
   - [x] Clone, Push, Pull successfully from/to Github
   - [ ] Set up Python dependencies on laptop
      - [x] Get Repl.It account instead

- Telegram Bot:
   - [x] Set up Repl.It account
   - [x] Create Telegram User, will act as doctor 
		- [x] Retrieve chat ID
		- [x] Work through: [Telegram Bots: An Introduction for Developers](https://core.telegram.org/bots)
   - [x] Create Chatbot: [MedDispenserBot](Telegram/README.md)
      - [x] Modify description: first message as a command overview
      - [x] Modify about: chatbot profile
      - [x] Retrieve access token
   - [x] Get familiarized with the [Telegram Bot API](https://core.telegram.org/bots/api#sendmessage)
   - [x] Code for 2 test commands:
      - "/bop": Sends doctor a greeting
      - "/echo": copies what the doctor says
   - [x] Work through [Building Telegram Bot with Amazon Lambda](https://dev.to/nqcm/-building-a-telegram-bot-with-aws-api-gateway-and-aws-lambda-27fg)

- AWS Lambda:
   - [x] Read through [Creating Functions Using the AWS Lambda Console Editor](https://docs.aws.amazon.com/lambda/latest/dg/code-editor.html)
   - [x] Try out Tutorials:
   	- [Amazon Lambda Tutorial](https://aws.amazon.com/lambda/getting-started/)
	- [Running a Serverless Telegram Bot from AWS Lambda](https://medium.com/@wk0/integrating-your-serverless-telegram-bot-with-aws-api-gateway-8a6227d05eb4)
	- [Serverless Telegram bot on AWS Lambda](https://hackernoon.com/serverless-telegram-bot-on-aws-lambda-851204d4236c)
   - [x] Send customized message to Telegram
   		- [x] Create test JSON Events
   - [ ] Receive commands as triggers
   - [x] Collect additional resources:
   	- [cfn-news-totelegram](https://github.com/jeshan/cfn-news-to-telegram/blob/master/cfn-news/code/index.py)
	- [How to Write Your First AWS Lambda Function](https://blog.runscope.com/posts/how-to-write-your-first-aws-lambda-function)
	- [Claudia Bot Builder](https://aws.amazon.com/blogs/compute/create-and-deploy-a-chat-bot-to-aws-lambda-in-five-minutes/)

 - AWS API Gateway:
   - [x] Try setting up Severless Telegram Bot with this guide: [Integrating Serverless Telegram Bot with AWS API Gateway](https://medium.com/@wk0/integrating-your-serverless-telegram-bot-with-aws-api-gateway-8a6227d05eb4)
   		- [ ] Troubleshoot: Why are only deleted Lambda functions showing up?
   - [x] Find additional resources:
   	- [Telegram Bot, API Gateway, AWS Lambda](https://dev.to/nqcm/-building-a-telegram-bot-with-aws-api-gateway-and-aws-lambda-27fg)

- [x] Set up AWS IAM users, roles, groups for Matt & Yutong
	- [x] Read about [IAM Roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)

__Tasks outstanding:__

- Work through Node.js & MariaDB resources
- Lambda triggers
- API Gateway Troubleshoot & Set up
- Find a way to avoid the bot having to ask for updates frequently.

---
<a name="032320"/>

### Week ending 3/23/20

__Tasks completed__ this week:

- [x] Research Telegram & Lambda resources
   - [Telegram Bots: An Introduction for Developers](https://core.telegram.org/bots)
   - [Amazon Lambda Tutorial](https://aws.amazon.com/lambda/getting-started/)
   - [Building Telegram Bot with Amazon Lambda](https://dev.to/nqcm/-building-a-telegram-bot-with-aws-api-gateway-and-aws-lambda-27fg)

- [x] Research Node.js resources:
   - [Installing Express](https://expressjs.com/en/starter/installing.html)
      - [HelloWorld](https://expressjs.com/en/starter/hello-world.html)
   - [Node.js Tutorial](https://www.w3schools.com/nodejs/)
  
- [x] Research MariaDB resources:
   - [Install MariaDB to RPi2](https://howtoraspberrypi.com/mariadb-raspbian-raspberry-pi/)
   - [Raspian Download](https://www.raspberrypi.org/downloads/raspbian/)
      - [Coder Dojo](https://projects.raspberrypi.org/en/coderdojo)

- [x] Set up Github branch: evelynbranch

