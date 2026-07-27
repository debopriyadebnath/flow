from __future__ import annotations

from django.conf import settings
from django.db import models

from apps.core.models import TimeStampedModel


class Journal(TimeStampedModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="journals")
    title = models.CharField(max_length=180)
    content = models.TextField()
    mood = models.ForeignKey(
    "mood.MoodEntry",
    on_delete=models.CASCADE,
    null=True,
    blank=True,
)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self) -> str:
        return self.title