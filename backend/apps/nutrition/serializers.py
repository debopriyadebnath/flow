from rest_framework import serializers

from .models import NutritionEntry


class NutritionEntrySerializer(serializers.ModelSerializer):

    class Meta:
        model = NutritionEntry

        fields = [
            "id",
            "date",
            "meal_type",
            "food_name",
            "calories",
            "protein_g",
            "carbs_g",
            "fats_g",
            "notes",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "created_at",
            "updated_at",
        ]