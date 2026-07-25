from __future__ import annotations

from django.conf import settings
from django.db import models

from apps.core.models import TimeStampedModel


class AIConversation(TimeStampedModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="ai_conversations")
    title = models.CharField(max_length=180)
    messages = models.JSONField(default=list, blank=True)
    medical_context = models.JSONField(default=dict, blank=True)
    model_name = models.CharField(max_length=120, default="gemini")
    is_archived = models.BooleanField(default=False)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self) -> str:
        return self.title