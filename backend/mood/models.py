from django.db import models
from django.conf import settings


class MoodEntry(models.Model):

    MOOD_CHOICES = [
        ("happy", "Happy"),
        ("calm", "Calm"),
        ("sad", "Sad"),
        ("anxious", "Anxious"),
        ("angry", "Angry"),
        ("tired", "Tired"),
    ]

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    mood = models.CharField(
        max_length=20,
        choices=MOOD_CHOICES
    )

    note = models.TextField(
        blank=True
    )

    energy_level = models.IntegerField(
        default=5
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )