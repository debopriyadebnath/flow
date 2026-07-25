from __future__ import annotations

from rest_framework import serializers

from .models import UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = (
            "id",
            "blood_group",
            "age",
            "weight_kg",
            "height_cm",
            "medical_history",
            "emergency_contact_name",
            "emergency_contact_phone",
            "avatar",
            "created_at",
            "updated_at",
        )
        read_only_fields = ("id", "created_at", "updated_at")
