from django.conf import settings
from django.db import models

from apps.core.models import TimeStampedModel


class WaterIntake(TimeStampedModel):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="water_intakes",
    )

    date = models.DateField()

    goal_ml = models.PositiveIntegerField(default=2000)

    consumed_ml = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.user.email} - {self.date}"