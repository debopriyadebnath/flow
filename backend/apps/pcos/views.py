from rest_framework.generics import (
    RetrieveUpdateAPIView,
    ListCreateAPIView,
    DestroyAPIView,
)

from rest_framework.permissions import IsAuthenticated

from .models import (
    PCOSProfile,
    PCOSSymptom,
)

from .serializers import (
    PCOSProfileSerializer,
    PCOSSymptomSerializer,
)



def calculate_wellness_score(profile):

    score = 0


    if profile.is_enabled:
        score += 20


    if profile.sleep_hours >= 7:
        score += 25


    if profile.water_intake_ml >= 2000:
        score += 20


    if profile.exercise_minutes >= 30:
        score += 20


    if profile.user.pcos_symptoms.exists():
        score += 15


    return score





class PCOSProfileView(RetrieveUpdateAPIView):

    serializer_class = PCOSProfileSerializer

    permission_classes = [
        IsAuthenticated
    ]


    def get_object(self):

        profile, created = PCOSProfile.objects.get_or_create(
            user=self.request.user
        )


        profile.wellness_score = calculate_wellness_score(profile)

        profile.save()


        return profile






class PCOSSymptomListCreateView(ListCreateAPIView):

    serializer_class = PCOSSymptomSerializer

    permission_classes = [
        IsAuthenticated
    ]


    def get_queryset(self):

        return PCOSSymptom.objects.filter(
            user=self.request.user
        )


    def perform_create(self, serializer):

        serializer.save(
            user=self.request.user
        )






class PCOSSymptomDeleteView(DestroyAPIView):

    serializer_class = PCOSSymptomSerializer

    permission_classes = [
        IsAuthenticated
    ]


    def get_queryset(self):

        return PCOSSymptom.objects.filter(
            user=self.request.user
        )