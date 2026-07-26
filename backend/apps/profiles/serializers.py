from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = [
            "date_of_birth",
            "height",
            "weight",
            "cycle_length",
            "period_duration",
            "last_period_date",
            "has_pcos",
            "has_endometriosis",
            "health_goals",
        ]