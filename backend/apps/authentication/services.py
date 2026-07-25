from __future__ import annotations

from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

from apps.profiles.models import UserProfile


User = get_user_model()


def register_user(*, email: str, password: str, first_name: str = "", last_name: str = "") -> User:
    user = User.objects.create_user(email=email, password=password, first_name=first_name, last_name=last_name)
    UserProfile.objects.get_or_create(user=user)
    return user


def refresh_token_pair(refresh_token: str) -> dict[str, str]:
    token = RefreshToken(refresh_token)
    user = User.objects.get(id=token["user_id"])
    token.blacklist()
    token = RefreshToken.for_user(user)
    return {
        "refresh": str(token),
        "access": str(token.access_token),
    }


def logout_user(refresh_token: str) -> None:
    token = RefreshToken(refresh_token)
    token.blacklist()


def get_or_create_profile(user: User) -> UserProfile:
    profile, _ = UserProfile.objects.get_or_create(user=user)
    return profile


def update_profile(user: User, **profile_data) -> UserProfile:
    profile = get_or_create_profile(user)
    for field, value in profile_data.items():
        setattr(profile, field, value)
    profile.save()
    return profile