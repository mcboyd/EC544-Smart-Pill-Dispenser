## Project Progress - Evelyn Liu

Weekly Progress:
* [3/30/20](#033020)
* [3/23/20](#032320)
---
<a name="033020"/>

### Week ending 3/30/20

__Tasks completed__ this week:

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

 - AWS API Gateway:
   - [x] Try setting up Severless Telegram Bot with this guide: [Integrating Serverless Telegram Bot with AWS API Gateway](https://medium.com/@wk0/integrating-your-serverless-telegram-bot-with-aws-api-gateway-8a6227d05eb4)
   		- [ ] Troubleshoot: Why are only deleted Lambda functions showing up?
   - [x] Find additional resources:
   	- [Telegram Bot, API Gateway, AWS Lambda](https://dev.to/nqcm/-building-a-telegram-bot-with-aws-api-gateway-and-aws-lambda-27fg)

- [x] Set up AWS IAM users, roles, groups for Matt & Yutong

__Tasks outstanding:__

- Work through Node.js resources:

- Research MariaDB resources:
   - [ ] [Install MariaDB to RPi2](https://howtoraspberrypi.com/mariadb-raspbian-raspberry-pi/)
   - [ ] [Raspian Download](https://www.raspberrypi.org/downloads/raspbian/)
      - [ ] [Coder Dojo](https://projects.raspberrypi.org/en/coderdojo)

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

