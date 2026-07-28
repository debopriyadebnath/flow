from django.conf import settings
from django.db import models

from apps.core.models import TimeStampedModel


class NutritionEntry(TimeStampedModel):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="nutrition_entries"
    )

    date = models.DateField()

    meal_type = models.CharField(
        max_length=50
    )

    food_name = models.CharField(
        max_length=200
    )

    calories = models.PositiveIntegerField(
        default=0
    )

    protein_g = models.FloatField(
        default=0
    )

    carbs_g = models.FloatField(
        default=0
    )

    fats_g = models.FloatField(
        default=0
    )

    notes = models.TextField(
        blank=True
    )


    def __str__(self):
        return f"{self.user.email} - {self.food_name}"