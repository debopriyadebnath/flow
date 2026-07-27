from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Profile
from .serializers import ProfileSerializer

from apps.authentication.serializers import UserSerializer


class ProfileView(RetrieveUpdateAPIView):

    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]


    def get_object(self):

        profile, created = Profile.objects.get_or_create(
            user=self.request.user
        )

        return profile



    def retrieve(self, request, *args, **kwargs):

        profile = self.get_object()

        return Response(
            {
                "user": UserSerializer(request.user).data,
                "profile": ProfileSerializer(profile).data,
            }
        )