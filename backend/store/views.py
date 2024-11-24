from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, permissions, status
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from .serializers import UserSerializer, RegisterSerializer
from django.contrib.auth import authenticate
from .models import Product
from .serializers import ProductSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# @api_view(['GET'])
# def getProducts(request):
#     products = Product.objects.all()
#     serializer = ProductSerializer(products, many = True)
#     return Response(serializer.data)




# Register API

@api_view(['POST'])
def registerAPI(request):
    data = request.data
    serializer = RegisterSerializer(data=data)
    if serializer.is_valid():
        user = serializer.save()
        token, created = Token.objects.get_or_create(user = user)
        return Response({
            'user' : UserSerializer(user).data,
            'token' : token.key
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Login API

@api_view(['POST'])
def loginAPI(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user:
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'user' : UserSerializer(user).data,
            'token' : token.key
        }, status=status.HTTP_200_OK)
    return Response({'error' : 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def post(request):
        response = Response({'message':'Logout successfully'})
        response.delete_cookie('token')
        return response


class ProductListCreateAPI(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ProductDetailAPI(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_object(self, pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        product = self.get_object(pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk):
        product = self.get_object(pk)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        product = self.get_object(pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
