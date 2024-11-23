from django.urls import path
from . import views

urlpatterns = [
    # path('', views.getProducts),
    path('register/', views.registerAPI),
    path('login/', views.loginAPI),
    path('products/', views.ProductListCreateAPI.as_view(), name='product-list-create'),
    path('products/<int:pk>/', views.ProductDetailAPI.as_view(), name='product-detail'),

]
