from __future__ import annotations

from django.conf import settings
from django.db import models

from apps.core.models import TimeStampedModel


class CommunityPost(TimeStampedModel):
    class Category(models.TextChoices):
        GENERAL = "general", "General"
        CYCLE = "cycle", "Cycle"
        MENTAL_WELLNESS = "mental_wellness", "Mental Wellness"
        PCOS = "pcos", "PCOS"
        NUTRITION = "nutrition", "Nutrition"

    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="community_posts",
    )
    is_anonymous = models.BooleanField(default=True)
    category = models.CharField(max_length=32, choices=Category.choices, default=Category.GENERAL)
    title = models.CharField(max_length=180)
    content = models.TextField()
    likes_count = models.PositiveIntegerField(default=0)
    reports_count = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self) -> str:
        return self.title


class Comment(TimeStampedModel):
    post = models.ForeignKey(CommunityPost, on_delete=models.CASCADE, related_name="comments")
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
    content = models.TextField()
    is_anonymous = models.BooleanField(default=True)

    class Meta:
        ordering = ("created_at",)

    def __str__(self) -> str:
        return f"Comment on {self.post_id}"