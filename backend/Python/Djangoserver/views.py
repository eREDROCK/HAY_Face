from django.shortcuts import render
from rest_framework.views import APIView
from django.http import  HttpResponse, JsonResponse
from rest_framework.response import Response
import random
import json
import re
from deepface import DeepFace
import base64
from threading import Thread
# Create your views here.

class DetectexpressionAPI(APIView):

    def post(self, request):
        base64pic = request.data.get("picbase64", "")
        base64pic=base64pic.split(",")[1]
        try:
            # print(base64pic)
            decodedpic = base64.b64decode(base64pic,validate=False)
            save_img_path = r'save_decode.png'
            with open(save_img_path, 'wb') as f3:
                f3.write(decodedpic)
        
            save_img_path = r'save_decode.png'
            emotion=DeepFace.analyze(img_path=save_img_path,actions=['emotion'],enforce_detection=False)
            emotionDict=dict(emotion[0])
            print(emotionDict["dominant_emotion"])
            
            response = {
                "emotion": str(emotionDict["dominant_emotion"])
            }
            return JsonResponse(response)
        except base64.binascii.Error as e:
            print("errorです")
            # エラー処理
            response = {
                "error": str(e)
            }
            return JsonResponse(response, status=400)