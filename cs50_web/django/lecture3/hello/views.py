from django.shortcuts import render
from django.shortcuts import HttpResponse

# Create your views here.
def index(request):
    return render(request, "hello/index.html")

def yanos(request):
    return HttpResponse("Hello, Yanos... you are a Django Guru!")

def iano(request):
    return HttpResponse("Ian you are playning too much with Django")

def greet(request, name):
    return render(request, "hello/greet.html", {
        "name": name.capitalize()
    })