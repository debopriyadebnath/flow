from __future__ import annotations

from django.conf import settings
from django.db import models

from apps.core.models import TimeStampedModel


class Cycle(TimeStampedModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="cycles")
    last_period_start = models.DateField()
    cycle_length_days = models.PositiveSmallIntegerField(default=28)
    period_length_days = models.PositiveSmallIntegerField(default=5)
    is_active = models.BooleanField(default=True)

    def __str__(self) -> str:
        return f"Cycle for {self.user.email} starting {self.last_period_start}"


class CycleEntry(TimeStampedModel):
    class FlowLevel(models.TextChoices):
        NONE = "none", "None"
        LIGHT = "light", "Light"
        MEDIUM = "medium", "Medium"
        HEAVY = "heavy", "Heavy"

    cycle = models.ForeignKey(Cycle, on_delete=models.CASCADE, related_name="entries")
    entry_date = models.DateField()
    symptoms = models.JSONField(default=list, blank=True)
    pain_level = models.PositiveSmallIntegerField(default=0)
    flow = models.CharField(max_length=16, choices=FlowLevel.choices, default=FlowLevel.NONE)
    energy_level = models.PositiveSmallIntegerField(default=0)
    sleep_hours = models.DecimalField(max_digits=4, decimal_places=1, null=True, blank=True)
    water_intake_ml = models.PositiveIntegerField(default=0)

    class Meta:
        unique_together = ("cycle", "entry_date")
        ordering = ("-entry_date",)

    def __str__(self) -> str:
        return f"{self.cycle.user.email} - {self.entry_date}"