from rest_framework import serializers

from .models import Profile



class ProfileSerializer(serializers.ModelSerializer):


    class Meta:

        model = Profile

        fields = [

            "id",

            "date_of_birth",

            "height",

            "weight",

            "cycle_length",

            "period_duration",

            "last_period_date",

            "has_pcos",

            "has_endometriosis",

            "has_thyroid",

            "has_anemia",

            "blood_group",

            "allergies",

            "medications",

            "emergency_contact",

            "health_goals",

            "created_at",

            "updated_at",

        ]

        read_only_fields = [

            "id",

            "created_at",

            "updated_at",

        ]