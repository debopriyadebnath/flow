from __future__ import annotations

from django.conf import settings
from django.db import models

from apps.core.models import TimeStampedModel


class Mood(TimeStampedModel):
    class Emotion(models.TextChoices):
        VERY_HAPPY = "very_happy", "Very Happy"
        HAPPY = "happy", "Happy"
        NEUTRAL = "neutral", "Neutral"
        LOW = "low", "Low"
        ANXIOUS = "anxious", "Anxious"
        SAD = "sad", "Sad"

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="moods")
    entry_date = models.DateField()
    emoji = models.CharField(max_length=16)
    emotion = models.CharField(max_length=16, choices=Emotion.choices, default=Emotion.NEUTRAL)
    mood_score = models.PositiveSmallIntegerField(default=0)
    stress_level = models.PositiveSmallIntegerField(default=0)
    anxiety_level = models.PositiveSmallIntegerField(default=0)
    notes = models.TextField(blank=True)

    class Meta:
        unique_together = ("user", "entry_date")
        ordering = ("-entry_date",)

    def __str__(self) -> str:
        return f"Mood for {self.user.email} on {self.entry_date}"