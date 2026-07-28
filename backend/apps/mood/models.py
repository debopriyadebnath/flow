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
        on_delete=models.CASCADE,
        related_name="mood_entries"
    )

    cycle_entry = models.ForeignKey(
        "cycles.CycleEntry",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="mood_entries"
    )

    mood = models.CharField(
        max_length=20,
        choices=MOOD_CHOICES
    )

    note = models.TextField(
        blank=True
    )

    energy_level = models.PositiveSmallIntegerField(
        default=5
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )


    def __str__(self):
        return f"{self.user.email} - {self.mood}"