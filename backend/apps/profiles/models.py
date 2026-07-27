from django.db import models
from django.conf import settings



class Profile(models.Model):

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="profile"
    )


    # Personal Information

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



    # Menstrual Health

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



    # Conditions / PCOS Support

    has_pcos = models.BooleanField(
        default=False
    )


    has_endometriosis = models.BooleanField(
        default=False
    )


    has_thyroid = models.BooleanField(
        default=False
    )


    has_anemia = models.BooleanField(
        default=False
    )



    # Medical Information

    blood_group = models.CharField(
        max_length=10,
        blank=True
    )


    allergies = models.TextField(
        blank=True
    )


    medications = models.TextField(
        blank=True
    )


    emergency_contact = models.CharField(
        max_length=100,
        blank=True
    )



    # Personal Goals

    health_goals = models.TextField(
        blank=True
    )



    # Timestamps

    created_at = models.DateTimeField(
        auto_now_add=True
    )


    updated_at = models.DateTimeField(
        auto_now=True
    )



    def __str__(self):

        return self.user.email