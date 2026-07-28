from django.db import models
from django.conf import settings


class JournalEntry(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="journal_entries"
    )

    title = models.CharField(
        max_length=100,
        blank=True
    )

    content = models.TextField()

    symptoms = models.JSONField(
        default=list,
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )


    def __str__(self):
        return f"{self.user.email} - {self.title}"