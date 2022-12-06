from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("<str:name>", views.greet , name="greet"),
    path("yanos", views.yanos, name="yanos"),
    path("iano", views.iano, name="iano")
]