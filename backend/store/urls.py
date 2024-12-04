from django.urls import path
from . import views

urlpatterns = [
    # path('', views.getProducts),
    path('register/', views.registerAPI),
    path('login/', views.loginAPI),
    path('logout/', views.LogoutView.as_view()),
    path('products/', views.ProductListCreateAPI.as_view(), name='product-list-create'),
    path('products/<int:pk>/', views.ProductDetailAPI.as_view(), name='product-detail'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('orders/', views.OrderListView.as_view(), name='orders'),
]
