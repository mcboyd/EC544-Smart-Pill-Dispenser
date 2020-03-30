import json
import os
from botocore.vendored import requests

def check_param(event:dict, param:str, field_errors:dict)->str:
    # checks for key and if val is null or an empty string
    if param in event and event[param] and str(event[param]).strip():
        return str(event[param])
    else:
        field_errors[param] = "Required"
        return None

def lambda_handler(event, context):
    field_errors = {}
    # ignore event parameters other than these 3
    name = check_param(event, 'name', field_errors)
    email = check_param(event, 'email', field_errors)
    message = check_param(event, 'message', field_errors)   

    if field_errors: 
        raise Exception(json.dumps({'field_errors': field_errors}))
    
    telegram_msg = 'From: {name}\nEmail: {email}\n Message:{message}'
    
    chat_id = os.environ['MY_CHAT_ID']
    
    telegram_token = os.environ['TELEGRAM_BOT_TOKEN']
    
    api_url = "https://api.telegram.org/bot"+telegram_token+"/"
    
    params = {'chat_id': chat_id, 'text': telegram_msg}
    
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