from datetime import date, timedelta

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from apps.cycles.models import Cycle
from apps.mood.models import MoodEntry
from apps.journal.models import JournalEntry

from .serializers import DashboardSerializer



class DashboardView(APIView):

    permission_classes = [IsAuthenticated]


    def get(self, request):

        user = request.user


        # Latest active cycle
        cycle = Cycle.objects.filter(
            user=user,
            is_active=True
        ).first()


        cycle_data = {}

        if cycle:

            today = date.today()

            cycle_day = (
                today - cycle.last_period_start
            ).days + 1


            next_period = (
                cycle.last_period_start
                + timedelta(days=cycle.cycle_length_days)
            )


            cycle_data = {
                "cycle_day": cycle_day,
                "cycle_length": cycle.cycle_length_days,
                "period_length": cycle.period_length_days,
                "next_period": next_period,
            }



        # Latest mood
        latest_mood = MoodEntry.objects.filter(
            user=user
        ).order_by(
            "-created_at"
        ).first()


        mood_data = {}

        if latest_mood:

            mood_data = {
                "mood": latest_mood.mood,
                "energy_level": latest_mood.energy_level,
                "note": latest_mood.note,
            }



        # Journal count
        journal_count = JournalEntry.objects.filter(
            user=user
        ).count()


        journal_data = {
            "total_entries": journal_count
        }



        data = {
            "cycle": cycle_data,
            "mood": mood_data,
            "journal": journal_data,
        }


        serializer = DashboardSerializer(data)

        return Response(
            serializer.data
        )