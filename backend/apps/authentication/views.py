from __future__ import annotations

from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from apps.profiles.serializers import UserProfileSerializer

from .serializers import (
    LoginSerializer,
    LogoutSerializer,
    RefreshTokenSerializer,
    RegisterSerializer,
    UserSerializer,
    build_token_pair,
)
from .services import get_or_create_profile, logout_user, refresh_token_pair, register_user


class AuthViewSet(viewsets.ViewSet):
    def get_permissions(self):
        if self.action in {"register", "login", "refresh", "forgot_password"}:
            return [AllowAny()]
        return [IsAuthenticated()]

    @action(detail=False, methods=["post"])
    def register(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = register_user(**serializer.validated_data)
        profile = get_or_create_profile(user)
        tokens = build_token_pair(user)
        response = {
            "user": UserSerializer(user).data,
            "profile": UserProfileSerializer(profile).data,
            "tokens": tokens,
        }
        return Response(response, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=["post"])
    def login(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        profile = get_or_create_profile(user)
        tokens = build_token_pair(user)
        response = {
            "user": UserSerializer(user).data,
            "profile": UserProfileSerializer(profile).data,
            "tokens": tokens,
        }
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=False, methods=["post"])
    def refresh(self, request):
        serializer = RefreshTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        tokens = refresh_token_pair(serializer.validated_data["refresh"])
        return Response(tokens, status=status.HTTP_200_OK)

    @action(detail=False, methods=["post"])
    def logout(self, request):
        serializer = LogoutSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        logout_user(serializer.validated_data["refresh"])
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=["post"])
    def forgot_password(self, request):
        return Response({"detail": "Password reset flow will be added in a later phase."}, status=status.HTTP_200_OK)
