from rest_framework import serializers

from .models import (
    PCOSProfile,
    PCOSSymptom,
)



class PCOSProfileSerializer(serializers.ModelSerializer):

    class Meta:

        model = PCOSProfile

        fields = "__all__"

        read_only_fields = [
            "user",
            "wellness_score",
            "created_at",
            "updated_at",
        ]





class PCOSSymptomSerializer(serializers.ModelSerializer):

    class Meta:

        model = PCOSSymptom

        fields = [
            "id",
            "symptom",
            "created_at",
        ]

        read_only_fields = [
            "id",
            "created_at",
        ]