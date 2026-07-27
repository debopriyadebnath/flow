from rest_framework import serializers
from .models import MoodEntry


class MoodSerializer(serializers.ModelSerializer):

    class Meta:
        model = MoodEntry
        fields = "__all__"
        read_only_fields = [
            "user",
            "created_at",
        ]