from __future__ import annotations

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.authentication.services import get_or_create_profile, update_profile

from .serializers import UserProfileSerializer


class ProfileViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=["get", "put", "patch"])
    def me(self, request):
        profile = get_or_create_profile(request.user)
        if request.method.lower() == "get":
            return Response({"user": {"id": request.user.id, "email": request.user.email}, "profile": UserProfileSerializer(profile).data})
        profile = update_profile(request.user, **request.data)
        return Response({"user": {"id": request.user.id, "email": request.user.email}, "profile": UserProfileSerializer(profile).data})