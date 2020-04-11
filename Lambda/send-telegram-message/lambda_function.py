import json
import os
from botocore.vendored import requests

def executeCommand(command:str)->str:

    if command == "patient":
        return "patient"
    elif command == "log":
        return "log"
    elif command == "contacts":
        return "contacts"
    elif command == "progress":
        return "progress"
    elif command == "treatment":
        return "treatment"
    else:
        return "Valid bot commands:\n" \
                "/patient - name & age of patient\n" \
                "/log - missed medication for the past 30 days\n" \
                "/contacts - patients' trusted contacts'\n" \
                "/progress - side effects or symptoms this week\n" \
                "/treatment - list what the medications are treating\n"

def lambda_handler(event, context):
    field_errors = {}
    command = ""
    if 'message' in event:
        message = event['message']
        
        if 'from' in message:
            chat_id = str(message['from']['id']).strip()
        else:
            field_errors['chat_id'] = "Dr's ID missing"
        
        if 'text' in message:    
            text = message['text'].strip()
        else:
            field_errors['text'] = "Text missing"
            
        if 'entities' in message:
            entities = message['entities']
            for entity in entities:
                if entity['type'] == "bot_command":
                    command = text[entity['offset']+1:entity['offset']+entity['length']]
                    break
        else:
            command = ""
    else:
        field_errors['message'] = "Message missing"
        
    if field_errors: 
        raise Exception(json.dumps({'field_errors': field_errors}))
    
    telegram_msg = executeCommand(command)
    
    telegram_msg = 'Doctor ID: {}\nMessage: {}\nCommand: {}'.format(chat_id, telegram_msg, command)
    params = {'chat_id': chat_id, 'text': telegram_msg}
    telegram_token = os.environ['TELEGRAM_BOT_TOKEN']
    api_url = "https://api.telegram.org/bot"+telegram_token+"/"
    res = requests.post(api_url + "sendMessage", data=params).json()

    if res["ok"]:
        return {
          "statusCode": 200,
          "body": json.dumps(telegram_msg)
        }
    else:
        print(res)
        return{
          "statusCode": 400,
          "body": res
        }
