from django.urls import path, include
from .views import DetectexpressionAPI

urlpatterns = [
    path('getpic', DetectexpressionAPI.as_view()),
]