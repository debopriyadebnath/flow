"""API router registration for HERmony backend."""

from django.urls import include, path
from rest_framework.routers import DefaultRouter

from apps.authentication.views import AuthViewSet
from apps.profiles.views import ProfileViewSet

router = DefaultRouter()
router.register(r"auth", AuthViewSet, basename="auth")
router.register(r"profile", ProfileViewSet, basename="profile")

urlpatterns = [
    path("", include(router.urls)),
]
