from __future__ import annotations

from django.conf import settings
from django.db import models

from apps.core.models import TimeStampedModel


class Medication(TimeStampedModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="medications")
    name = models.CharField(max_length=150)
    dosage = models.CharField(max_length=100, blank=True)
    frequency = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    instructions = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self) -> str:
        return f"{self.name} for {self.user.email}"


class Reminder(TimeStampedModel):
    medication = models.ForeignKey(Medication, on_delete=models.CASCADE, related_name="reminders")
    title = models.CharField(max_length=150)
    scheduled_for = models.DateTimeField()
    recurrence_rule = models.CharField(max_length=120, blank=True)
    is_completed = models.BooleanField(default=False)

    class Meta:
        ordering = ("scheduled_for",)

    def __str__(self) -> str:
        return self.title