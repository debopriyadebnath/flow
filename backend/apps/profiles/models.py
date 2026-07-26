from django.db import models
from django.conf import settings


class Profile(models.Model):

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="profile"
    )

    date_of_birth = models.DateField(
        null=True,
        blank=True
    )

    height = models.FloatField(
        null=True,
        blank=True
    )

    weight = models.FloatField(
        null=True,
        blank=True
    )

    cycle_length = models.IntegerField(
        default=28
    )

    period_duration = models.IntegerField(
        default=5
    )

    last_period_date = models.DateField(
        null=True,
        blank=True
    )

    has_pcos = models.BooleanField(
        default=False
    )

    has_endometriosis = models.BooleanField(
        default=False
    )

    health_goals = models.TextField(
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )


    def __str__(self):
        return self.user.email