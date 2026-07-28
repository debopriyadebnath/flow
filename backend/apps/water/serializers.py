from rest_framework import serializers

from .models import WaterIntake


class WaterIntakeSerializer(serializers.ModelSerializer):

    class Meta:
        model = WaterIntake
        fields = [
            "id",
            "date",
            "goal_ml",
            "consumed_ml",
            "created_at",
            "updated_at",
        ]
        read_only_fields = [
            "id",
            "created_at",
            "updated_at",
        ]