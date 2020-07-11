# coding: UTF-8
import os
import json
import tweepy

CK = os.environ['CONSUMER_KEY']
CS = os.environ['CONSUMER_KEY_SECLET']
AT = os.environ['ACCESS_TOKEN']
AS = os.environ['ACCESS_TOKEN_SECLET']

LIST_ID_STR = os.environ['LIST_ID']
LIST_ID = int(LIST_ID_STR)
OWNER_SCREEN_NAME = os.environ['OWNER_SCREEN_NAME']

auth = tweepy.OAuthHandler(CK, CS)
auth.set_access_token(AT, AS)

api = tweepy.API(auth)

# TODO error
def lambda_handler(event, context):
    userId = event["user_id"]
    api.add_list_member(list_id = LIST_ID, screen_name = userId, owner_screen_name = OWNER_SCREEN_NAME)
    return {
        "body": event["user_id"]
    }