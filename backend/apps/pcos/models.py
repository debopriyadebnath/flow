from django.db import models
from django.conf import settings



class PCOSProfile(models.Model):

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="pcos_profile"
    )


    is_enabled = models.BooleanField(
        default=False
    )


    irregular_periods = models.BooleanField(
        default=False
    )


    acne = models.BooleanField(
        default=False
    )


    hair_growth = models.BooleanField(
        default=False
    )


    hair_loss = models.BooleanField(
        default=False
    )


    weight_changes = models.BooleanField(
        default=False
    )


    mood_changes = models.BooleanField(
        default=False
    )


    sleep_hours = models.FloatField(
        default=0
    )


    water_intake_ml = models.IntegerField(
        default=0
    )


    exercise_minutes = models.IntegerField(
        default=0
    )


    wellness_score = models.IntegerField(
        default=0
    )


    notes = models.TextField(
        blank=True
    )


    created_at = models.DateTimeField(
        auto_now_add=True
    )


    updated_at = models.DateTimeField(
        auto_now=True
    )


    def __str__(self):

        return f"{self.user.email} PCOS Profile"





class PCOSSymptom(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="pcos_symptoms"
    )


    symptom = models.CharField(
        max_length=100
    )


    created_at = models.DateTimeField(
        auto_now_add=True
    )


    def __str__(self):

        return f"{self.user.email} - {self.symptom}"