from rest_framework import serializers

from .models import Cycle, CycleEntry


class CycleEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = CycleEntry
        fields = [
            "id",
            "entry_date",
            "symptoms",
            "pain_level",
            "flow",
            "energy_level",
            "sleep_hours",
            "water_intake_ml",
        ]


class CycleSerializer(serializers.ModelSerializer):
    entries = CycleEntrySerializer(many=True, read_only=True)

    class Meta:
        model = Cycle
        fields = [
            "id",
            "last_period_start",
            "cycle_length_days",
            "period_length_days",
            "is_active",
            "entries",
        ]